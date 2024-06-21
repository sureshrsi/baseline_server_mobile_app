const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const GovtSchemes = sequelize.define('govtschemes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    headId: {
        type: DataTypes.STRING,
      },
    name_of_familymember: {
      type: DataTypes.STRING
    },
    scheme_name: {
      type: DataTypes.STRING
    },
    amount: {
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
    tableName: 'govtschemes',
  });
  
  module.exports = GovtSchemes;