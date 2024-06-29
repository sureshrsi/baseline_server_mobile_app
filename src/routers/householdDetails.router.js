const express = require('express');
const householdDetailsController = require('../controllers/householdDetails.controller');
const router = express.Router();

router.post('/inserthouseholdDetails',householdDetailsController.insertHouseholdDetails)
router.put('/updatehouseholdDetails/:id',householdDetailsController.updateHouseHoldFamilyMembers)

module.exports = router