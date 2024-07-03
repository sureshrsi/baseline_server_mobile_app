const express = require('express');
const householdDetailsController = require('../controllers/householdDetails.controller');
const router = express.Router();


router.post('/inserthouseholdDetails',householdDetailsController.insertHouseholdDetails)
router.put('/updatehouseholdDetails/:id',householdDetailsController.updateHouseHoldFamilyMembers)


router.post('/householdDetails',householdDetailsController.insertHouseholdDetails)
router.post('/bulkinsertionhouseholddetails',householdDetailsController.bulkInsertionHouseholdMembers)

module.exports = router