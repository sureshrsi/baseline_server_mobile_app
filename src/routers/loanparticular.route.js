const express = require('express');
const createLoanParticularsController  = require('../controllers/loanparticular.controller');
const router = express.Router();

router.get('/loanparticulardetails',createLoanParticularsController.getLoanParticularDetails)
router.post('/insertloanparticular',createLoanParticularsController.insertLoanParticular)
router.put('/updateloanparticular/:id',createLoanParticularsController.updateLoanParticular)

module.exports = router