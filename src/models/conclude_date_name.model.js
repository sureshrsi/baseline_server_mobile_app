const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DateServeyorName_Details = sequelize.define('date_serveyor_name', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      date : {
        type: DataTypes.STRING
      },
      serveyor_name : {
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
    tableName: 'date_serveyor_name',
  });
  
  module.exports = DateServeyorName_Details;