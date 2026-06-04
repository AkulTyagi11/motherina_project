import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import availabilityRouter from './routes/availability.routes.js';
import appointmentsRouter from './routes/appointments.routes.js';
import authRouter from './routes/auth.routes.js';
import adminRouter from './routes/admin.routes.js';

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use((req, res, next) => {
	if (req.body) mongoSanitize.sanitize(req.body);
	if (req.params) mongoSanitize.sanitize(req.params);
	if (req.query) mongoSanitize.sanitize(req.query);
	next();
});

const corsOrigins = (process.env.CORS_ORIGINS || process.env.CORS_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean);
const corsOptions = {
	origin: corsOrigins.length ? corsOrigins : true,
	credentials: true,
};
app.use(cors(corsOptions));

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: process.env.NODE_ENV === 'production' ? 100 : 1000,
	message: 'Too many requests, please try again later.'
});
app.use('/api/', limiter);

// Example health route
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/availability', availabilityRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);

app.use('/api', (req, res) => {
	res.status(404).json({ error: 'API route not found' });
});

app.use((err, req, res, next) => {
	console.error(err);
	if (res.headersSent) return next(err);
	res.status(err.status || 500).json({
		error: err.message || 'Internal server error',
	});
});

export default app;
