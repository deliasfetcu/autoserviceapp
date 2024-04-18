const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  chassisNumber: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  engineType: { type: String, enum: ['diesel', 'petrol', 'hybrid', 'electric'], required: true },
  engineCapacity: { type: Number, required: true },
  horsepower: { type: Number, required: true },
  kilowatts: { type: Number, required: true },
  email: { type: String, required: true }, 
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;