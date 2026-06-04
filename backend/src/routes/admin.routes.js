import { Router } from 'express';
import {
  createAvailability,
  deactivateAvailability,
  listAvailability,
  updateAvailability,
} from '../controllers/availabilityController.js';
import { cancelAppointment, listAppointments } from '../controllers/appointmentsController.js';
import { requireAdmin } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import {
  appointmentQuerySchema,
  availabilityCreateSchema,
  availabilityQuerySchema,
  availabilityUpdateSchema,
  idParamsSchema,
} from '../validators/schemas.js';

const router = Router();

router.use(requireAdmin);

router.get('/availability', validate(availabilityQuerySchema, 'query'), listAvailability);
router.post('/availability', validate(availabilityCreateSchema), createAvailability);
router.patch('/availability/:id', validate(idParamsSchema, 'params'), validate(availabilityUpdateSchema), updateAvailability);
router.delete('/availability/:id', validate(idParamsSchema, 'params'), deactivateAvailability);

router.get('/appointments', validate(appointmentQuerySchema, 'query'), listAppointments);
router.post('/appointments/:id/cancel', validate(idParamsSchema, 'params'), cancelAppointment);

export default router;
