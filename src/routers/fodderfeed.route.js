const express = require('express');
const createFodderFeedController  = require('../controllers/fodderfeed.controller');
const router = express.Router();

router.get('/fodderfeeddetails',createFodderFeedController.getFodderFeedDetails)
router.post('/insertfodderfeed',createFodderFeedController.insertFodderFeedDetails)
router.put('/updatefodderfeed/:id',createFodderFeedController.updateFodderFeedDetails)

module.exports = router