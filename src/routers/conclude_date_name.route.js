const express = require('express');
const DateServeyorNameController  = require('../controllers/conclude_date_name.controller');
const router = express.Router();

router.get('/dateserveyornamedetails',DateServeyorNameController.getDateServeyorName_Details)
router.post('/insertdateserveyor',DateServeyorNameController.insertDateServeyorName_Details)
router.put('/updatedateserveyor/:id',DateServeyorNameController.updateDateServeyorName_Details)

module.exports = router