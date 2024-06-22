const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DrinkingWaterDetails = sequelize.define('availabledrinkingwater', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      drinkingwater_item : {
        type: DataTypes.STRING
      },
      drinkingwater_units: {
        type: DataTypes.STRING
      },
      drinking_quantity : {
        type: DataTypes.STRING
      },
      source_of_drinking_water: {
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
    tableName: 'availabledrinkingwater',
  });
  
  module.exports = DrinkingWaterDetails;