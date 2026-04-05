import { Router } from 'express';
import { handleGoogleFormWebhook } from '../controllers/webhook_controllers.js';

const router = Router();

// POST /api/webhooks/google-forms - Recibir datos desde Google Apps Script
router.post('/webhooks/google-forms', handleGoogleFormWebhook);

export default router;
