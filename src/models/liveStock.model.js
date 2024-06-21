const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LiveStockDetails = sequelize.define('livestockdetails', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      name_of_the_animal: {
        type: DataTypes.STRING
      },
      existing_no: {
        type: DataTypes.STRING
      },
      milk_production: {
        type: DataTypes.STRING
      },
      mill_consumed: {
        type: DataTypes.STRING
      },
      milk_quantity_sold: {
        type: DataTypes.STRING
      },
      value_of_animals: {
        type: DataTypes.STRING
      },
      income_generated_during_last_year: {
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
    tableName: 'livestockdetails',
  });
  
  module.exports = LiveStockDetails;