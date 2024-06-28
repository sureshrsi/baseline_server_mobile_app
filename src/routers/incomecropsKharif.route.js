const express = require('express');
const createIncomeCropsController  = require('../controllers/saveIncomeCropsKharif.controller');
const router = express.Router();

router.post('/landParticulars',createIncomeCropsController.landParticularsData)
router.post('/insertIncomeKharif',createIncomeCropsController.createIncomeCrops)
router.put('/updateIncomeKharif/:id',createIncomeCropsController.updateIncomeKharif)
router.post('/bulkinsertionkharif',createIncomeCropsController.bulkInsertionIncomeCrops)
router.post('/bulkinsertionlandparticulars',createIncomeCropsController.bulkInsertionLandParticulars)
module.exports = router