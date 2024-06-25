const express = require('express');
const HaveReceivedTrainingWatershedSoilLandStatusController  = require('../controllers/have_received_training_watershed_status.controller');
const router = express.Router();

router.get('/receivedtrainingwatershedstatusdetails',HaveReceivedTrainingWatershedSoilLandStatusController.getReceivedWatershedSoilLandStatusDetails)
router.post('/insertreceivedtrainingwatershedstatus',HaveReceivedTrainingWatershedSoilLandStatusController.insertReceivedWatershedSoilLandStatusDetails)
router.put('/updatereceivedtrainingwatershedstatus/:id',HaveReceivedTrainingWatershedSoilLandStatusController.updateReceivedWatershedSoilLandStatusDetails)

module.exports = router