const express = require('express');
const createParticipatonCommunityController  = require('../controllers/participate_community_program.controller');
const router = express.Router();

router.get('/participationcommunityprogramdetails',createParticipatonCommunityController.getParticipationCommunityProgramDetails)
router.post('/insertparticipationcommunityprogram',createParticipatonCommunityController.insertParticipationCommunityProgramDetails)
router.put('/updateparticipationcommunityprogram/:id',createParticipatonCommunityController.updateParticipationCommunityProgramDetails)

module.exports = router