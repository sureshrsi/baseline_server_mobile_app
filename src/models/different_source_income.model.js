const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DifferentSourceIncomeDetails = sequelize.define('different_source_income', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      source : {
        type: DataTypes.STRING
      },
      income_during_the_year: {
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
    tableName: 'different_source_income',
  });
  
  module.exports = DifferentSourceIncomeDetails;