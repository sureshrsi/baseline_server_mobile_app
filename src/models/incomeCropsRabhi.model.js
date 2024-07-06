const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const IncomeRabhi = sequelize.define('incomecrops_rabhi', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
    headId: {
      type: DataTypes.STRING,
    },
    crop_grown: {
      type: DataTypes.STRING,
    },
    rainfed_area: {
      type: DataTypes.STRING,
    },
    rainfed_yield: {
      type: DataTypes.STRING,
    },
    rainfed_cost_of_cultivation: {
      type: DataTypes.STRING,
    },
    rainfed_rate_per_qtls: {
      type: DataTypes.STRING,
    },
    rainfed_gross_income: {
      type: DataTypes.STRING,
    },
    rainfed_net_income: {
      type: DataTypes.STRING,
    },
    irrigated_area: {
      type: DataTypes.STRING,
    },
    irrigated_yield: {
      type: DataTypes.STRING,
    },
    irrigated_cost_of_cultivation: {
      type: DataTypes.STRING,
    },
    irrigated_rate_per_qtls: {
      type: DataTypes.STRING,
    },
    irrigated_gross_income: {
      type: DataTypes.STRING,
    },
    irrigated_net_income: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'incomecrops_rabhi',
  });
  
  module.exports = IncomeRabhi;