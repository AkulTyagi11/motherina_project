import { Router } from 'express';
import { getSlots } from '../controllers/availabilityController.js';
import { validate } from '../middleware/validate.js';
import { slotsQuerySchema } from '../validators/schemas.js';

const router = Router();

router.get('/slots', validate(slotsQuerySchema, 'query'), getSlots);

export default router;
