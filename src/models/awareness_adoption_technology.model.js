const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AwarenessAdoptionTechnologyDetails = sequelize.define('awareness_adoption_technology', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      technology : {
        type: DataTypes.STRING
      },
      source_of_information : {
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
    tableName: 'awareness_adoption_technology',
  });
  
  module.exports = AwarenessAdoptionTechnologyDetails;