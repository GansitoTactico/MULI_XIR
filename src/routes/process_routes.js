import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
  createProcess,
  getProcessByCode,
  getProcesses
} from '../controllers/process_controllers.js';

const router = Router();

// Rutas protegidas
router.post('/process', authRequired, createProcess);
router.get('/process', authRequired, getProcesses);

// Ruta pública
router.get('/process/:processCode', getProcessByCode);

export default router;
