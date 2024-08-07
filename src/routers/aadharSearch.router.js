const express = require('express');
const aadharController = require('../controllers/aadharSearch.controller');
const router = express.Router();

router.get('/search', aadharController.searchItems);
router.get('/searchByProject', aadharController.searchProject);
router.get('/searchMicoByProject', aadharController.searchMicroByProject);
router.get('/searchAadharByProject', aadharController.searchAadharByProject);
router.get('/searchByName', aadharController.searchName);
router.put('updateitems/:id', aadharController.updateItem); // Add this line for the update route
router.get('/householdinfo', aadharController.getHouseHoldInfo);
router.get('/landparticulars',aadharController.getLandPariculars)
router.get('/incomecropsfromkharif',aadharController.getIncomeFromKharif)
router.get('/incomecropsfromrabhi',aadharController.getIncomeFromRabhi)
router.get('/livestockdetails',aadharController.getLiveStockDetails)
router.get('/migrationdetails',aadharController.getMigrationDetails)
router.put('/updatehouseholdmember',aadharController.updateHouseHoldFamilyMembers)


module.exports = router;