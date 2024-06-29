const express = require('express');
const createIncomeCropsController  = require('../controllers/saveIncomeCropsKharif.controller');
const router = express.Router();

router.post('/insertlandParticulars',createIncomeCropsController.landParticularsData)
router.put('/updatelandparticular/:id',createIncomeCropsController.updateLandParticulars)

router.post('/insertIncomeKharif',createIncomeCropsController.createIncomeCrops)
router.put('/updateIncomeKharif/:id',createIncomeCropsController.updateIncomeKharif)

module.exports = router