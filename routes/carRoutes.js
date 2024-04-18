const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Routes for cars
router.get('/cars', carController.getAllCars);
router.get('/cars/:carId', carController.getCarById);
router.post('/cars', carController.createCar);
router.put('/cars/:carId', carController.updateCarById);
router.delete('/cars/:carId', carController.deleteCarById);

module.exports = router;