const Appointment = require('../models/appointment');

function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// Crearea unei noi programări
exports.createAppointment = async (req, res) => {
  try {
    const { chassisNumber, action, day, hour, contactMethod, contactInfo } = req.body;

    // Check if all required fields are present
    if (!chassisNumber || !action || !day || !hour || !contactMethod || !contactInfo) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create the appointment
    const appointment = await Appointment.create({
      chassisNumber,
      action,
      day,
      hour,
      contactMethod,
      contactInfo
    });

    // Return success response
    res.status(201).json(appointment);
  } catch (error) {
    
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'An error occurred while creating the appointment' });
  }
};

// Vizualizarea tuturor programărilor
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).send('A apărut o eroare la recuperarea programărilor.');
  }
};

// Vizualizarea unei singure programări
exports.getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).send('Programarea nu a fost găsită.');
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).send('A apărut o eroare la recuperarea programării.');
  }
};

// Actualizarea unei programări
exports.updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAppointment) {
      return res.status(404).send('Programarea nu a fost găsită.');
    }
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).send('A apărut o eroare la actualizarea programării.');
  }
};

// Ștergerea unei programări
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).send('Programarea nu a fost găsită.');
    }
    res.status(200).send('Programarea a fost ștearsă cu succes.');
  } catch (error) {
    res.status(500).send('A apărut o eroare la ștergerea programării.');
  }
};
