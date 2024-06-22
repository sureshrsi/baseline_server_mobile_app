const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HorticultureDetails = sequelize.define('horticulturedetails', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      horticulture_details : {
        type: DataTypes.STRING
      },
      horticulture_number: {
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
    tableName: 'horticulturedetails',
  });
  
  module.exports = HorticultureDetails;