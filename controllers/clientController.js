const Client = require('../models/client');
// Controller functions for managing clients

// Get all clients
exports.getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};

// Get client by ID
exports.getClientById = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (error) {
    next(error);
  }
};

// Create a new client
exports.createClient = async (req, res, next) => {
  try {
    const { firstName, lastName, phoneNumbers, email } = req.body;
    const client = new Client({ firstName, lastName, phoneNumbers, email });
    const savedClient = await client.save();
    res.status(201).json(savedClient);
  } catch (error) {
    next(error);
  }
};

// Update client by ID
exports.updateClientById = async (req, res, next) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.clientId, req.body, { new: true });
    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(updatedClient);
  } catch (error) {
    next(error);
  }
};

// Delete client by ID
exports.deleteClientById = async (req, res, next) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.clientId);
    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deactivateClientById = async (req, res, next) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.clientId, { isActive: false }, { new: true });
    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(updatedClient);
  } catch (error) {
    next(error);
  }
};

exports.activateClientById = async (req, res, next) => {
  try {
    const activatedClient = await Client.findByIdAndUpdate(req.params.clientId, { isActive: true }, { new: true });
    if (!activatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(activatedClient);
  } catch (error) {
    next(error);
  }
};


