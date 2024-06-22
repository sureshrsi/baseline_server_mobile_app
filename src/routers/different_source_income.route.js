const express = require('express');
const createDifferentSourceIncomeController  = require('../controllers/different_source_income.controller');
const router = express.Router();

router.get('/differentsourceincomedetails',createDifferentSourceIncomeController.getDifferentSourceIncomeDetails)
router.post('/insertdifferentsourceincome',createDifferentSourceIncomeController.insertDifferentSourceIncome)
router.put('/updatedifferentsourceincome/:id',createDifferentSourceIncomeController.updateDifferentSourceIncome)

module.exports = router