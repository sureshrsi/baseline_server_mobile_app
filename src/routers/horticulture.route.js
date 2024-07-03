const express = require('express');
const createHorticultureController  = require('../controllers/horticulture.controller');
const router = express.Router();

router.get('/horticulturedetails',createHorticultureController.getHorticultureDetails)
router.post('/inserthorticulture',createHorticultureController.insertHorticultureDetails)
router.put('/updatehorticulture/:id',createHorticultureController.updateHorticultureDetails)
router.post('/bulkinsertionhorticulture',createHorticultureController.bulkInsertionHorticulture)
module.exports = router