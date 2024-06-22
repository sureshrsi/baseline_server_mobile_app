const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HouseholdAssetsDetails = sequelize.define('household_assets', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      assets : {
        type: DataTypes.STRING
      },
      number : {
        type: DataTypes.STRING
      },
      present_value: {
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
    tableName: 'household_assets',
  });
  
  module.exports = HouseholdAssetsDetails;