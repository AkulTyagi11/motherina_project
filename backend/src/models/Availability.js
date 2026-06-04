import mongoose from 'mongoose';

const { Schema } = mongoose;

const availabilitySchema = new Schema(
  {
    practitionerId: { type: String, trim: true }, // single practitioner scenario; optional
    date: { type: Date, required: true }, // Represents day for non-recurring availability
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    slotDurationMinutes: { type: Number, default: 30, min: 5 },
    timezone: { type: String, default: 'Asia/Kolkata', trim: true },
    isRecurring: { type: Boolean, default: false },
    recurrenceRule: { type: String }, // e.g. RFC 5545 RRULE string ("FREQ=WEEKLY;BYDAY=MO,WE,FR")
    recurrenceEndDate: { type: Date },
    exceptions: [{ type: Date }], // Dates excluded from recurrence
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

availabilitySchema.pre('save', function (next) {
  if (this.startTime >= this.endTime) {
    return next(new Error('startTime must be before endTime'));
  }
  next();
});

availabilitySchema.index({ date: 1, startTime: 1, endTime: 1 });
availabilitySchema.index({ practitionerId: 1 });
availabilitySchema.index({ isActive: 1, isRecurring: 1, startTime: 1, recurrenceEndDate: 1 });

export default mongoose.model('Availability', availabilitySchema);
