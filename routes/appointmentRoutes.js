const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Rute pentru programări
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:id', appointmentController.getAppointment); // Actualizat pentru a corespunde cu numele metodei din controller
router.post('/appointments', appointmentController.createAppointment);
router.put('/appointments/:id', appointmentController.updateAppointment); // Actualizat pentru a corespunde cu numele metodei din controller
router.delete('/appointments/:id', appointmentController.deleteAppointment); // Actualizat pentru a corespunde cu numele metodei din controller

module.exports = router;
