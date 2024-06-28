const express = require('express');
const createHouseholdAssetsController  = require('../controllers/household_assets.controller');
const router = express.Router();

router.get('/householdassetdetails',createHouseholdAssetsController.getHouseholdAssetsDetails)
router.post('/inserthouseholdasset',createHouseholdAssetsController.insertHouseholdAssetsDetails)
router.put('/updatehouseholdassets/:id',createHouseholdAssetsController.updateHouseholdAssetsDetails)
router.post('/bulkinsertionhouseholdassets',createHouseholdAssetsController.bulkInsertionHouseholdAsset)
module.exports = router