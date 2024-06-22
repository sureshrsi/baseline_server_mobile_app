const express = require('express');
const createDrinkingWaterController  = require('../controllers/drinkingwater.controller');
const router = express.Router();

router.get('/drinkingwaterdetails',createDrinkingWaterController.getDrinkingWaterDetails)
router.post('/insertdrinkingwater',createDrinkingWaterController.insertDrinkingWater)
router.put('/updatedrinkingwater/:id',createDrinkingWaterController.updateDrinkingWater)

module.exports = router