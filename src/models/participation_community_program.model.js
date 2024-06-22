const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ParticipationCommunityProgramDetails = sequelize.define('participation_community_program', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      name_of_the_community_program : {
        type: DataTypes.STRING
      },
      tick_mark_appropriate : {
        type: DataTypes.STRING
      },
      yes_or_no : {
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
    tableName: 'participation_community_program',
  });
  
  module.exports = ParticipationCommunityProgramDetails;