import { Router } from 'express';
import { createAvailability, listAvailability, getSlots } from '../controllers/availabilityController.js';

const router = Router();

router.get('/', listAvailability);
router.post('/', createAvailability);
router.get('/slots', getSlots);

export default router;
