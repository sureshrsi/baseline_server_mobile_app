const express = require('express');
const createGrazeCattleCommunityController  = require('../controllers/graze_cattle_community.controller');
const router = express.Router();

router.get('/grazecattlecommunitydetails',createGrazeCattleCommunityController.getGrazeCattleCommunityDetails)
router.post('/insertgrazecattlecommunity',createGrazeCattleCommunityController.insertGrazeCattleCommunityDetails)
router.put('/updategrazecattlecommunity/:id',createGrazeCattleCommunityController.updateGrazeCattleCommunityDetails)
router.post('/bulkinsertiongrazecattle',createGrazeCattleCommunityController.grazeCattleDetails)
module.exports = router