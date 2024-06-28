const express = require('express');
const createAwarenessAdoptionTechnologyController  = require('../controllers/awareness_adoption_technology.controller');
const router = express.Router();

router.get('/awarenessadoptiontechnologydetails',createAwarenessAdoptionTechnologyController.getAwarenessAdoptionTechnologyDetails)
router.post('/insertawarenessadoptiontechnology',createAwarenessAdoptionTechnologyController.insertAwarenessAdoptionTechnologyDetails)
router.put('/updateawarenessadoptiontechnology/:id',createAwarenessAdoptionTechnologyController.updateAwarenessAdoptionTechnologyDetails)
router.post('/bulkinsertionadoptiontechnology',createAwarenessAdoptionTechnologyController.bulkInsertionAwarenessAdoption)
module.exports = router