const express = require('express');
const createGovtBenefitController  = require('../controllers/govtbenefits.controller');
const router = express.Router();

router.get('/govtbenefitdetails',createGovtBenefitController.getGovtBenefitsDetails)
router.post('/insertgovtbenefit',createGovtBenefitController.insertGovtBenefits)
router.put('/updategovtbenefit/:id',createGovtBenefitController.updateGovtBenefits)
router.post('/bulkinsertiongovt',createGovtBenefitController.bulkInsertionGovtBenefits)
module.exports = router