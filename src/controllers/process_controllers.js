import Process from '../models/process_model.js';
import FormResponse from '../models/form_response_model.js';
import QRCode from 'qrcode';

// ###############################################################
// ## NOTA: ¡Valores para reemplazar!
// ## Debes reemplazar los IDs de tus formularios de Google
// ## y el ID del campo (entry) donde se pre-llenará el processCode.
// ###############################################################
const GOOGLE_FORM_CONFIG = {
    producer:    { id: '1FAIpQLSeqK4ooRL3qqTlA_8-anzHKlcvzlMTrA86V5Etw3eUL3R0QgQ',  },
    distributor: { id: '1FAIpQLSep9THN395Lp2qktFZEjVr6uUDq4UaPOY1OHa0hcrA8z-nOmQ',  },
    store:       { id: '1FAIpQLSfEXhdrxSAN6erv4VbIynynUYVFOHaMNZ8u8tGapnA-8C8g6g',  },
    client:      { id: '1FAIpQLScUP5vJcwbXvwqhSgUzBWjcRj9C8VnZh_BMnqr_912QHNUaFQ',  }
};

export function generateProcessCode() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `PROC-${timestamp}-${random}`.toUpperCase();
}

export function generateFormUrls() {
  const urls = {};
  for (const [role, config] of Object.entries(GOOGLE_FORM_CONFIG)) {
    urls[role] = `https://docs.google.com/forms/d/e/${config.id}/viewform?usp=dialog}`;
  }
  return urls;
}

export const createProcess = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Título y descripción son requeridos' });
    }

    const processCode = generateProcessCode();

    const newProcess = new Process({
      title: title.trim(),
      description: description.trim(),
      processCode,
      user: req.user.id
    });
    await newProcess.save();

    const roles = ['producer', 'distributor', 'store', 'client'];
    await Promise.all(
      roles.map(role =>
        new FormResponse({
          processCode,
          role,
          formId: GOOGLE_FORM_CONFIG[role].id,
          status: 'pending'
        }).save()
      )
    );

    const formUrls = generateFormUrls(processCode);

    const qrCodes = {};
    for (const [role, url] of Object.entries(formUrls)) {
      qrCodes[role] = await QRCode.toDataURL(url, { errorCorrectionLevel: 'H' });
    }

    res.status(201).json({
      process: {
        id: newProcess._id,
        title: newProcess.title,
        description: newProcess.description,
        processCode: newProcess.processCode,
        createdAt: newProcess.createdAt
      },
      qrCodes,
      formUrls,
      message: 'Proceso creado exitosamente. Comparte los QR codes con los participantes.'
    });

  } catch (error) {
    console.error('Error creando proceso:', error);
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Error al generar el código de proceso. Por favor, inténtalo de nuevo.' });
    }
    res.status(500).json({ message: 'Error interno del servidor', details: error.message });
  }
};

export const getProcessByCode = async (req, res) => {
  try {
    const { processCode } = req.params;

    const [process, responses] = await Promise.all([
      Process.findOne({ processCode }),
      FormResponse.find({ processCode, status: 'processed' }).sort({ submittedAt: 1 })
    ]);

    if (!process) {
      return res.status(404).json({ message: 'Proceso no encontrado' });
    }

    const status = {
      producer: false,
      distributor: false,
      store: false,
      client: false
    };

    responses.forEach(response => {
      if (status[response.role] !== undefined) {
        status[response.role] = true;
      }
    });

    res.json({
      process,
      responses,
      status,
      allCompleted: Object.values(status).every(Boolean)
    });

  } catch (error) {
    console.error(`Error obteniendo proceso ${req.params.processCode}:`, error);
    res.status(500).json({ message: 'Error interno del servidor', details: error.message });
  }
};
export const getProcesses = async (req, res) => {
  try {
    const processes = await Process.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(processes);
  } catch (error) {
    console.error('Error obteniendo los procesos del usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor', details: error.message });
  }
};

export const updateProcess = async (req, res) => {
  try {
    const { title, description } = req.body;
    const processUpdated = await Process.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );

    if (!processUpdated) {
      return res.status(404).json({ message: 'Proceso no encontrado' });
    }

    res.json(processUpdated);
  } catch (error) {
    console.error(`Error actualizando proceso ${req.params.id}:`, error);
    res.status(500).json({ message: 'Error interno del servidor', details: error.message });
  }
};

export const deleteProcess = async (req, res) => {
  try {
    const processDeleted = await Process.findByIdAndDelete(req.params.id);

    if (!processDeleted) {
      return res.status(404).json({ message: 'Proceso no encontrado' });
    }

    // Also delete associated form responses
    await FormResponse.deleteMany({ processCode: processDeleted.processCode });

    res.sendStatus(204);
  } catch (error) {
    console.error(`Error eliminando proceso ${req.params.id}:`, error);
    res.status(500).json({ message: 'Error interno del servidor', details: error.message });
  }
};
