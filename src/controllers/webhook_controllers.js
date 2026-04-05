import FormResponse from '../models/form_response_model.js';
import Process from '../models/process_model.js';

// ###############################################################
// ## NOTA: ¡Valores para reemplazar!
// ## Mapeo de los IDs de las preguntas de Google Forms a nombres
// ## de campos legibles. Debes obtener los IDs de tus formularios.
// ###############################################################
const FIELD_MAPPING = {
  producer: {
    // 'ID_PREGUNTA_1': 'nombreCampo1',
    // 'ID_PREGUNTA_2': 'nombreCampo2',
  },
  distributor: {
    // 'ID_PREGUNTA_3': 'nombreCampo3',
  },
  store: {},
  client: {}
};

async function updateProcessStatus(processCode) {
  try {
    const completedCount = await FormResponse.countDocuments({
      processCode,
      status: 'processed'
    });

    let newStatus = 'active';
    if (completedCount >= 4) {
      newStatus = 'completed';
    }

    await Process.findOneAndUpdate(
      { processCode },
      { 
        status: newStatus,
        updatedAt: new Date()
      }
    );
    console.log(`[INFO] Estado del proceso ${processCode} actualizado a: ${newStatus}`);
  } catch (error) {
    console.error(`[ERROR] Error actualizando estado del proceso ${processCode}:`, error);
  }
}

function processFormData(role, rawData) {
    const mapping = FIELD_MAPPING[role] || {};
    const processed = {};
    
    // El webhook de Google Apps Script envía un objeto `formData`
    const formData = rawData.formData || {};

    // Buscamos el processCode dentro de los datos del formulario
    // Esto es un fallback por si no viene en el cuerpo principal del webhook
    let foundProcessCode = rawData.processCode;
    if (!foundProcessCode) {
        // Aquí deberías poner los posibles IDs del campo processCode de tus formularios
        const processCodeFieldIds = ['entry.123456789']; 
        for (const id of processCodeFieldIds) {
            if (formData[id]) {
                foundProcessCode = formData[id];
                break;
            }
        }
    }

    for (const [fieldId, value] of Object.entries(formData)) {
        const fieldName = mapping[fieldId];
        if (fieldName) {
            processed[fieldName] = value;
        } else {
            // Guardar campos no mapeados con su ID original
            processed[fieldId] = value;
        }
    }
  
    return { processedData: processed, extractedProcessCode: foundProcessCode };
}


export const handleGoogleFormWebhook = async (req, res) => {
  try {
    const { formId, responseId, role, timestamp } = req.body;
    
    const { processedData, extractedProcessCode } = processFormData(role, req.body);

    if (!extractedProcessCode || !role || !req.body.formData) {
      console.warn('[WARN] Webhook con datos incompletos recibido:', req.body);
      return res.status(400).json({ message: 'Datos incompletos: processCode, role y formData son requeridos' });
    }
    
    console.log(`[INFO] Webhook recibido: Rol=${role}, Proceso=${extractedProcessCode}`);

    const processExists = await Process.findOne({ processCode: extractedProcessCode });
    if (!processExists) {
      console.warn(`[WARN] Intento de webhook para proceso no existente: ${extractedProcessCode}`);
      return res.status(404).json({ message: 'Proceso no encontrado' });
    }

    const formResponse = await FormResponse.findOneAndUpdate(
      { processCode: extractedProcessCode, role },
      {
        responseId,
        formId,
        submittedAt: new Date(timestamp),
        data: processedData,
        rawData: req.body.formData,
        status: 'processed'
      },
      { upsert: true, new: true }
    );

    await updateProcessStatus(extractedProcessCode);

    console.log(`[SUCCESS] Respuesta guardada para ${role} en proceso ${extractedProcessCode}`);
    res.status(200).json({ success: true, message: 'Respuesta procesada correctamente' });

  } catch (error) {
    console.error('[ERROR] Error en webhook:', error);
    // Opcional: Guardar el error en la base de datos para depuración
    res.status(500).json({ message: 'Error interno del servidor', details: error.message });
  }
};

