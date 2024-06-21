const express = require('express');
const createLandLessController  = require('../controllers/landless.controller');
const router = express.Router();

router.get('/landlessdetails',createLandLessController.getLandLessDetails)
router.post('/insertlandlessdetails',createLandLessController.insertLandLess)
router.put('/updatelandlessdetails/:id',createLandLessController.updateLandLess)

module.exports = router