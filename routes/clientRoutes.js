const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Routes for clients
router.get('/clients', clientController.getAllClients);
router.get('/clients/:clientId', clientController.getClientById);
router.post('/clients', clientController.createClient);
router.put('/clients/:clientId', clientController.updateClientById);
router.delete('/clients/:clientId', clientController.deleteClientById);
router.put('/clients/:clientId/deactivate', clientController.deactivateClientById);
router.put('/clients/:clientId/activate', clientController.activateClientById);

module.exports = router;