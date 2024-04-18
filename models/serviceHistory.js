const mongoose = require('mongoose');

// Define schema for service history
const serviceHistorySchema = new mongoose.Schema({
  appointmentId: { type: Number, required: true }, // Reference to the appointment
  actionType: { type: String, required: true }, // Action type (e.g., "Receiving", "Processing")
  description: { type: String }, // Description of the action
  repairDuration: { type: Number }, // Duration of repair in minutes (multiple of 10)
  // You can include additional fields as needed
});

// Create model for service history
const ServiceHistory = mongoose.model('ServiceHistory', serviceHistorySchema,'ServiceHistory');

module.exports = ServiceHistory;