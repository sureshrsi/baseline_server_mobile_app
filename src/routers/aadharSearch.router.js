const express = require('express');
const aadharController = require('../controllers/aadharSearch.controller');
const router = express.Router();

router.get('/search', aadharController.searchItems);
router.get('/searchByName', aadharController.searchName);
router.put('updateitems/:id', aadharController.updateItem); // Add this line for the update route
router.get('/householdinfo', aadharController.getHouseHoldInfo);
router.get('/landparticulars',aadharController.getLandPariculars)
router.put('/updatehouseholdmember',aadharController.updateHouseHoldFamilyMembers)

module.exports = router;