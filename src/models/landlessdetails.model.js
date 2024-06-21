const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LandLessDetails = sequelize.define('landlessdetails', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
      headId: {
        type: DataTypes.STRING,
      },
      name_of_the_scheme_or_project: {
        type: DataTypes.STRING
      },
      mandays: {
        type: DataTypes.STRING
      },
      wage_per_day : {
        type: DataTypes.STRING
      },
      income: {
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
    tableName: 'landlessdetails',
  });
  
  module.exports = LandLessDetails;