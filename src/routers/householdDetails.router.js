const express = require('express');
const householdDetailsController = require('../controllers/householdDetails.controller');
const router = express.Router();

router.post('/householdDetails',householdDetailsController.insertHouseholdDetails)

module.exports = router