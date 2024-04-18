const Car = require('../models/car');

// Controller functions for managing cars

// Get all cars
exports.getAllCars = async (req, res, next) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
};

// Get car by ID
exports.getCarById = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.carId);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
};

// Create a new car
exports.createCar = async (req, res, next) => {
  try {
    const { registrationNumber, chassisNumber, make, model, year, engineType, engineCapacity, horsepower, kilowatts, email } = req.body;
    const car = new Car({ registrationNumber, chassisNumber, make, model, year, engineType, engineCapacity, horsepower, kilowatts, email });
    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (error) {
    next(error);
  }
};

// Update car by ID
exports.updateCarById = async (req, res, next) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.carId, req.body, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(updatedCar);
  } catch (error) {
    next(error);
  }
};

// Delete car by ID
exports.deleteCarById = async (req, res, next) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.carId);
    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
