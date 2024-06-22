const express = require('express');
const createSourceQualityWaterController  = require('../controllers/source_quality_water.controller');
const router = express.Router();

router.get('/sourcequalitywaterdetails',createSourceQualityWaterController.getSourceQualityWaterDetails)
router.post('/insertsourcequalitywater',createSourceQualityWaterController.insertSourceQualityWater)
router.put('/updatesourcequalitywater/:id',createSourceQualityWaterController.updateSourceQualityWater)

module.exports = router