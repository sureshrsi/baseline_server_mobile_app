const express = require('express');
const createLiveStockController  = require('../controllers/liveStock.controller');
const router = express.Router();

router.post('/insertLiveStock',createLiveStockController.insertLiveStock)
router.put('/updateLiveStock/:id',createLiveStockController.updateLiveStock)
router.post('/insertBulkLiveStock',createLiveStockController.bulkInsertionLivestock)
module.exports = router