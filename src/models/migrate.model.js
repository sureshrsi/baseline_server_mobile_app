const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MigrationStatus = sequelize.define('migratestatus', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      name_of_the_person_migrating: {
        type: DataTypes.STRING
      },
      male_or_female: {
        type: DataTypes.STRING
      },
      no_of_person_migrating_per_year: {
        type: DataTypes.STRING
      },
      reasons_for_migrating: {
        type: DataTypes.STRING
      },
      place_of_migrating: {
        type: DataTypes.STRING
      },
      occupation_during_migration: {
        type: DataTypes.STRING
      },
      income_for_such_occupation: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
  }, {
    tableName: 'migratestatus',
  });
  
  module.exports = MigrationStatus;