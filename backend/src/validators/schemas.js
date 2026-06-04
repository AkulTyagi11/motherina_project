import Joi from 'joi';

const objectId = Joi.string().hex().length(24);
const localDate = Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/);
const localTimeOrIso = Joi.string().min(4);

export const idParamsSchema = Joi.object({
  id: objectId.required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const slotsQuerySchema = Joi.object({
  date: localDate.required(),
});

export const appointmentQuerySchema = Joi.object({
  date: localDate.optional(),
  status: Joi.string().valid('pending', 'confirmed', 'cancelled').optional(),
});

export const availabilityQuerySchema = Joi.object({
  date: localDate.optional(),
  includeInactive: Joi.string().valid('true', 'false').optional(),
});

export const createAppointmentSchema = Joi.object({
  clientName: Joi.string().trim().min(2).max(120).required(),
  clientEmail: Joi.string().trim().email().required(),
  clientPhone: Joi.string().trim().min(5).max(40).required(),
  serviceType: Joi.string().trim().min(2).max(120).required(),
  notes: Joi.string().trim().max(2000).allow('', null),
  startTime: Joi.string().isoDate().required(),
  endTime: Joi.string().isoDate().required(),
});

export const availabilityCreateSchema = Joi.object({
  practitionerId: Joi.string().trim().max(120).allow('', null),
  date: localDate.required(),
  startTime: localTimeOrIso.required(),
  endTime: localTimeOrIso.required(),
  slotDurationMinutes: Joi.number().integer().min(5).max(240).default(30),
  timezone: Joi.string().trim().default('Asia/Kolkata'),
  isRecurring: Joi.boolean().default(false),
  recurrenceRule: Joi.string().trim().allow('', null),
  recurrenceEndDate: localDate.allow('', null),
  exceptions: Joi.array().items(localDate).default([]),
  isActive: Joi.boolean().default(true),
});

export const availabilityUpdateSchema = Joi.object({
  practitionerId: Joi.string().trim().max(120).allow('', null),
  date: localDate.optional(),
  startTime: localTimeOrIso.optional(),
  endTime: localTimeOrIso.optional(),
  slotDurationMinutes: Joi.number().integer().min(5).max(240).optional(),
  timezone: Joi.string().trim().optional(),
  isRecurring: Joi.boolean().optional(),
  recurrenceRule: Joi.string().trim().allow('', null),
  recurrenceEndDate: localDate.allow('', null),
  exceptions: Joi.array().items(localDate),
  isActive: Joi.boolean().optional(),
}).min(1);
