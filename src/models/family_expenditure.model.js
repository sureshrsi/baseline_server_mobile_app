const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FamilyExpenditureDetails = sequelize.define('familyexpenditure', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      items : {
        type: DataTypes.STRING
      },
      expenditure_per_last_year: {
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
    tableName: 'familyexpenditure',
  });
  
  module.exports = FamilyExpenditureDetails;