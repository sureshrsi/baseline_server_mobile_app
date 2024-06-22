const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FodderFeedDetails = sequelize.define('fodderfeeddetails', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      fodderfeed_item : {
        type: DataTypes.STRING
      },
      fodderfeed_area_quantity: {
        type: DataTypes.STRING
      },
      fodderfeed_production: {
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
    tableName: 'fodderfeeddetails',
  });
  
  module.exports = FodderFeedDetails;