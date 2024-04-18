const express = require('express');
const router = express.Router();
const serviceHistoryController = require('../controllers/serviceHistoryController');

// Routes for service histories
router.get('/service-histories', serviceHistoryController.getAllServiceHistories);
router.get('/service-histories/:serviceHistoryId', serviceHistoryController.getServiceHistoryById);
router.post('/service-histories', serviceHistoryController.createServiceHistory);
router.put('/service-histories/:serviceHistoryId', serviceHistoryController.updateServiceHistoryById);
router.delete('/service-histories/:serviceHistoryId', serviceHistoryController.deleteServiceHistoryById);

module.exports = router;
