const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AgriImplementsDetails = sequelize.define('agriimplements', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      implements : {
        type: DataTypes.STRING
      },
      no_of_implements: {
        type: DataTypes.STRING
      },
      implements_ownerd_hired : {
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
    tableName: 'agriimplements',
  });
  
  module.exports = AgriImplementsDetails;