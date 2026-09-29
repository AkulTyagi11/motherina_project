import { Router } from 'express';
import { cancelAppointment, listAppointments } from '../controllers/appointmentsController.js';
import { requireAdmin } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import {
  appointmentQuerySchema,
  idParamsSchema,
} from '../validators/schemas.js';

const router = Router();

router.use(requireAdmin);

router.get('/appointments', validate(appointmentQuerySchema, 'query'), listAppointments);
router.post('/appointments/:id/cancel', validate(idParamsSchema, 'params'), cancelAppointment);

export default router;
