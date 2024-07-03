const express = require('express');
const createMigrateController  = require('../controllers/migration.controller');
const router = express.Router();

router.post('/insertmigrate',createMigrateController.insertMigrationStatus)
router.put('/updatemigrate/:id',createMigrateController.updateMigrationStatus)
router.post('/bulkinsertionmigrate',createMigrateController.bulkInsertionMigrationStatus)
module.exports = router