import { Router } from 'express';
import { listAppointments, createAppointment, cancelAppointment } from '../controllers/appointmentsController.js';

const router = Router();

router.get('/', listAppointments);
router.post('/', createAppointment);
router.delete('/:id', cancelAppointment);

export default router;
