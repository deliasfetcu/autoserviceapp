const ServiceHistory = require('../models/serviceHistory');

// Controller functions for managing service histories

// Get all service histories
exports.getAllServiceHistories = async (req, res, next) => {
  try {
    const serviceHistories = await ServiceHistory.find();
    res.status(200).json(serviceHistories);
  } catch (error) {
    next(error);
  }
};

// Get service history by ID
exports.getServiceHistoryById = async (req, res, next) => {
  try {
    const serviceHistory = await ServiceHistory.findById(req.params.serviceHistoryId);
    if (!serviceHistory) {
      return res.status(404).json({ message: 'Service history not found' });
    }
    res.status(200).json(serviceHistory);
  } catch (error) {
    next(error);
  }
};

// Create a new service history
exports.createServiceHistory = async (req, res, next) => {
  try {
    const { appointmentId, actionType, description, repairDuration } = req.body;

    // Create the service history
    const serviceHistory = new ServiceHistory({ appointmentId, actionType, description, repairDuration });
    const savedServiceHistory = await serviceHistory.save();

    res.status(201).json(savedServiceHistory);
  } catch (error) {
    next(error);
  }
};

// Update service history by ID
exports.updateServiceHistoryById = async (req, res, next) => {
  try {
    const updatedServiceHistory = await ServiceHistory.findByIdAndUpdate(req.params.serviceHistoryId, req.body, { new: true });
    if (!updatedServiceHistory) {
      return res.status(404).json({ message: 'Service history not found' });
    }
    res.status(200).json(updatedServiceHistory);
  } catch (error) {
    next(error);
  }
};

// Delete service history by ID
exports.deleteServiceHistoryById = async (req, res, next) => {
  try {
    const deletedServiceHistory = await ServiceHistory.findByIdAndDelete(req.params.serviceHistoryId);
    if (!deletedServiceHistory) {
      return res.status(404).json({ message: 'Service history not found' });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};