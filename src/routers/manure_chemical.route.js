const express = require('express');
const createManureChemicalController  = require('../controllers/manure_chemical_fertilizer.controller');
const router = express.Router();

router.get('/manurechemicaldetails',createManureChemicalController.getManureChemicalDetails)
router.post('/insertmanurechemical',createManureChemicalController.insertManureChemical)
router.put('/updatemanurechemical/:id',createManureChemicalController.updateManureChemical)
router.post('/bulkinsertionmanurechemical',createManureChemicalController.bulkInsertionManureChemical)
module.exports = router