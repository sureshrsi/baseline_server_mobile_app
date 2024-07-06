const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SourceQualityWaterDetails = sequelize.define('source_quality_water', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      water_source : {
        type: DataTypes.STRING
      },
      driedupwell_or_borewell_nos: {
        type: DataTypes.STRING
      },
      functioning_well_or_borewell_nos : {
        type: DataTypes.STRING
      },
      present_water_level: {
        type: DataTypes.STRING
      },
      yield_from_borewell: {
        type: DataTypes.STRING
      },
      irrigated_agri_kharif: {
        type: DataTypes.STRING
      },
      irrigated_agri_rabhi : {
        type: DataTypes.STRING
      },
      irrigated_agri_summer : {
        type: DataTypes.STRING
      },
      other_corps : {
        type: DataTypes.STRING
      },
      horticulture : {
        type: DataTypes.STRING
      },
      water_quality : {
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
    tableName: 'source_quality_water',
  });
  
  module.exports = SourceQualityWaterDetails;