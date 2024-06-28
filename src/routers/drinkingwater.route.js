const express = require('express');
const createDrinkingWaterController  = require('../controllers/drinkingwater.controller');
const router = express.Router();

router.get('/drinkingwaterdetails',createDrinkingWaterController.getDrinkingWaterDetails)
router.post('/insertdrinkingwater',createDrinkingWaterController.insertDrinkingWater)
router.put('/updatedrinkingwater/:id',createDrinkingWaterController.updateDrinkingWater)
router.post('/bulkinsertiondrinkingwater',createDrinkingWaterController.bulkInsertionDrinkingWater)
module.exports = router