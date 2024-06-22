const express = require('express');
const createMembershipController  = require('../controllers/membership.controller');
const router = express.Router();

router.get('/membershipdetails',createMembershipController.getMembershipDetails)
router.post('/insertmembership',createMembershipController.insertMembershipDetails)
router.put('/updatemembership/:id',createMembershipController.updateMembershipDetails)

module.exports = router