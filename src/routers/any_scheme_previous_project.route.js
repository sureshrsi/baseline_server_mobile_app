const express = require('express');
const AnySchemePreviousProjectController  = require('../controllers/any_scheme_previous_project.controller');
const router = express.Router();

router.get('/anyschemepreviousprojectdetails',AnySchemePreviousProjectController.getAnySchemePreviousProjectDetails)
router.post('/insertanyschemepreviousproject',AnySchemePreviousProjectController.insertAnySchemePreviousProjectDetails)
router.put('/updateanyschemepreviousproject/:id',AnySchemePreviousProjectController.updateAnySchemePreviousProjectDetails)

module.exports = router