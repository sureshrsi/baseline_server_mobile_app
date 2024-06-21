const express = require('express');
const createIncomeCropsController  = require('../controllers/saveIncomeCropsRabhi.controller');
const router = express.Router();

router.post('/insertIncomeRabhi',createIncomeCropsController.insertIncomeCropsRabhi)
router.put('/updateIncomeRabhi/:id',createIncomeCropsController.updateIncomeRabhi)

module.exports = router