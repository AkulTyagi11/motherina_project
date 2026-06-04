// Server bootstrap
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';
import { bootstrapAdminUser } from './services/bootstrapAdmin.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/motherina';

async function start() {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log('MongoDB connected');
		await bootstrapAdminUser();
		app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
	} catch (err) {
		console.error('Startup error:', err);
		process.exit(1);
	}
}

start();
