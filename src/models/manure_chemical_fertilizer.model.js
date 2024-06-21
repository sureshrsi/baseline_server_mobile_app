const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ManureChemicalDetails = sequelize.define('manurechemicalfertilizers', {
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
      organic: {
        type: DataTypes.STRING
      },
      micro_nutrients: {
        type: DataTypes.STRING
      },
      chemical_N: {
        type: DataTypes.STRING
      },
      chemical_P: {
        type: DataTypes.STRING
      },
      chemical_K: {
        type: DataTypes.STRING
      },
      cost: {
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
    tableName: 'manurechemicalfertilizers',
  });
  
  module.exports = ManureChemicalDetails;