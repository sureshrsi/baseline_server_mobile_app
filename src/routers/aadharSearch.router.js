const express = require('express');
const aadharController = require('../controllers/aadharSearch.controller');
const router = express.Router();

router.get('/search', aadharController.searchItems);
router.get('/searchByName', aadharController.searchName);
router.put('updateitems/:id', aadharController.updateItem); // Add this line for the update route
router.get('/householdinfo', aadharController.getHouseHoldInfo);
router.get('/landparticulars',aadharController.getLandPariculars)
router.get('/incomecropsfromkharif',aadharController.getIncomeFromKharif)
router.get('/incomecropsfromrabhi',aadharController.getIncomeFromRabhi)
router.get('/livestockdetails',aadharController.getLiveStockDetails)
router.put('/updatehouseholdmember',aadharController.updateHouseHoldFamilyMembers)
router.put('/updatelandparticular',aadharController.updateLandParticulars)

module.exports = router;