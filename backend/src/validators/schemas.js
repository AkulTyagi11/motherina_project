import Joi from 'joi';

const objectId = Joi.string().hex().length(24);
const localDate = Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/);

export const idParamsSchema = Joi.object({
  id: objectId.required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const appointmentQuerySchema = Joi.object({
  date: localDate.optional(),
  status: Joi.string().valid('pending', 'confirmed', 'cancelled').optional(),
});
