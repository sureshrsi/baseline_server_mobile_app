const express = require('express');
const createPestDiseaseController  = require('../controllers/pest_disease.controller');
const router = express.Router();

router.get('/pestdiseasedetails',createPestDiseaseController.getPestDiseaseDetails)
router.post('/insertpestdisease',createPestDiseaseController.insertPestDisease)
router.put('/updatepestdisease/:id',createPestDiseaseController.updatePestDiSease)
router.post('/bulkinsertionpest',createPestDiseaseController.bulkInsertionPestDisease)
module.exports = router