const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ReceivedWatershedSoilLandStatusDetails = sequelize.define('have_received_watershed_soil_land_status', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      status : {
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
    tableName: 'have_received_watershed_soil_land_status',
  });
  
  module.exports = ReceivedWatershedSoilLandStatusDetails;