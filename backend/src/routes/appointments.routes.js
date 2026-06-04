import { Router } from 'express';
import { createAppointment } from '../controllers/appointmentsController.js';
import { validate } from '../middleware/validate.js';
import { createAppointmentSchema } from '../validators/schemas.js';

const router = Router();

router.post('/', validate(createAppointmentSchema), createAppointment);

export default router;
