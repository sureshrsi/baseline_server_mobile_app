const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AnySchemePreviousProjectDetails = sequelize.define('any_scheme_previous_project', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      name_of_the_scheme_or_project : {
        type: DataTypes.STRING
      },
      details_of_benefits_obtained : {
        type: DataTypes.STRING
      },
      value_of_the_benefit : {
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
    tableName: 'any_scheme_previous_project',
  });
  
  module.exports = AnySchemePreviousProjectDetails;