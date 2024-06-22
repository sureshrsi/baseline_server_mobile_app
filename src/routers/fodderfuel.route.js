const express = require('express');
const createFodderFuelController  = require('../controllers/fodderfuel.controller');
const router = express.Router();

router.get('/fodderfueldetails',createFodderFuelController.getFodderFuelDetails)
router.post('/insertfodderfuel',createFodderFuelController.insertFodderFuelDetails)
router.put('/updatefodderfuel/:id',createFodderFuelController.updateFodderFuelDetails)

module.exports = router