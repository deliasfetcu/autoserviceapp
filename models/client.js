const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumbers: { type: [String], required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
