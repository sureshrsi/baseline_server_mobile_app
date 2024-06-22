const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PestDiseaseDetails = sequelize.define('pestdisease', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      crops: {
        type: DataTypes.STRING
      },
      name_of_the_pest_disease: {
        type: DataTypes.STRING
      },
      control_measures_biological: {
        type: DataTypes.STRING
      },
      control_measures_chemical: {
        type: DataTypes.STRING
      },
      control_measures_others: {
        type: DataTypes.STRING
      },
      amount_spent_material: {
        type: DataTypes.STRING
      },
      amount_spent_wages: {
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
    tableName: 'pestdisease',
  });
  
  module.exports = PestDiseaseDetails;