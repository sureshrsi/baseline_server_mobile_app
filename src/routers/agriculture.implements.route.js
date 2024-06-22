const express = require('express');
const createAgriImplementsController  = require('../controllers/agriculture_implements.controller');
const router = express.Router();

router.get('/agricultureimplementsdetails',createAgriImplementsController.getAgriImplementsDetails)
router.post('/insertagricultureimplements',createAgriImplementsController.insertAgriImplementsDetails)
router.put('/updateagricultureimplements/:id',createAgriImplementsController.updateAgriImplementsDetails)

module.exports = router