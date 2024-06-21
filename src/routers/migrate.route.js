const express = require('express');
const createMigrateController  = require('../controllers/migration.controller');
const router = express.Router();

router.post('/insertmigrate',createMigrateController.insertMigrationStatus)
router.put('/updatemigrate/:id',createMigrateController.updateMigrationStatus)

module.exports = router