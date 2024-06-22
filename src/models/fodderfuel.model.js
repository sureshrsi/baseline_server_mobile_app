const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FodderFuelDetails = sequelize.define('fodderfuel', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      foldder_details : {
        type: DataTypes.STRING
      },
      fodder_utilisation : {
        type: DataTypes.STRING
      },
      cow_dung: {
        type: DataTypes.STRING
      },
      fire_wood: {
        type: DataTypes.STRING
      },
      agriculture_waste: {
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
    tableName: 'fodderfuel',
  });
  
  module.exports = FodderFuelDetails;