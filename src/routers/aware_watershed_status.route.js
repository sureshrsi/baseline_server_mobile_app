const express = require('express');
const AwareWatershedSoilLandStatusController  = require('../controllers/aware_watershed_status.controller');
const router = express.Router();

router.get('/awarewatershedstatusdetails',AwareWatershedSoilLandStatusController.getAwareWatershedSoilLandStatusDetails)
router.post('/insertawarewatershedstatus',AwareWatershedSoilLandStatusController.insertAwareWatershedSoilLandStatusDetails)
router.put('/updateawarewatershedstatus/:id',AwareWatershedSoilLandStatusController.updateAwareWatershedSoilLandStatusDetails)

module.exports = router