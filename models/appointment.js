const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  chassisNumber: { type: String, required: true },
  action: { type: String, required: true },
  day: { type: String, required: true },
  hour: { type: String, required: true },
  contactMethod: { type: String, required: true },
  contactInfo: { type: String, required: true },
  appointmentNumber: { type: Number, default: 0 }, // New field for incrementing value
});

// Define pre-save middleware to increment appointmentNumber
appointmentSchema.pre('save', async function (next) {
  try {
    if (this.isNew) { // Check if it's a new document
      const lastAppointment = await this.constructor.findOne({}, {}, { sort: { 'appointmentNumber': -1 } }); // Find the last document based on appointmentNumber
      if (lastAppointment) {
        this.appointmentNumber = lastAppointment.appointmentNumber + 1; // Increment appointmentNumber by 1
      } else {
        this.appointmentNumber = 1; // If no documents found, set appointmentNumber to 1
      }
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
