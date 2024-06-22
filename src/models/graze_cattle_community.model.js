const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const GrazeCattleCommunityDetails = sequelize.define('graze_cattle_community', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      grazing_of_cattle_or_animal : {
        type: DataTypes.STRING
      },
      number_of_animals : {
        type: DataTypes.STRING
      },
      how_many_days_in_the_year: {
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
    tableName: 'graze_cattle_community',
  });
  
  module.exports = GrazeCattleCommunityDetails;