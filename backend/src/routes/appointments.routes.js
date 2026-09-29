import { Router } from 'express';
import { calcomWebhook } from '../controllers/appointmentsController.js';

const router = Router();

// Cal.com webhook endpoint
router.post('/webhook/calcom', calcomWebhook);

export default router;
