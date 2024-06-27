const express = require('express');
const headInformationController = require('../controllers/headerInformation.controller');
const router = express.Router();

router.get('/districts',headInformationController.getDistrict);
router.get('/wcc',headInformationController.getWcc);
router.get('/projects',headInformationController.getProject);
router.get('/watershed',headInformationController.getWaterShedVillage)
router.get('/habitation',headInformationController.getHabitaion)
router.get('/mandal',headInformationController.getMandal)
router.get('/grampanchayat',headInformationController.getGramPanchayat)
router.post('/individualinformation',headInformationController.getIndividualInformation)
router.put('/updateIndividualInfo/:id',headInformationController.updateHeaderInformation)
module.exports=router;