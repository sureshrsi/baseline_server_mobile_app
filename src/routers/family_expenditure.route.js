const express = require('express');
const createFamilyExpController  = require('../controllers/family_expenditure.controller');
const router = express.Router();

router.get('/familyexpendituredetails',createFamilyExpController.getFamilyExpenditureDetails)
router.post('/insertfamilyexpenditure',createFamilyExpController.insertFamilyExpenditure)
router.put('/updatefamilyexpenditure/:id',createFamilyExpController.updateFamilyExpenditure)
router.post('/bulkinsertionfamily',createFamilyExpController.bulkInsertionFamilyExpenditure)
module.exports = router