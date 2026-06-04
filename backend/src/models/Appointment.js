import mongoose from 'mongoose';

const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    clientName: { type: String, required: true, trim: true },
    clientEmail: { type: String, required: true, trim: true, lowercase: true },
    clientPhone: { type: String, trim: true },
    serviceType: { type: String, trim: true },
    notes: { type: String, trim: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    source: { type: String, enum: ['web', 'google-sync'], default: 'web' },
    googleCalendarEventId: { type: String },
  },
  { timestamps: true }
);

appointmentSchema.pre('save', function (next) {
  if (this.startTime >= this.endTime) {
    return next(new Error('startTime must be before endTime'));
  }
  next();
});

appointmentSchema.index({ startTime: 1, endTime: 1 });
appointmentSchema.index({ clientEmail: 1 });

export default mongoose.model('Appointment', appointmentSchema);
