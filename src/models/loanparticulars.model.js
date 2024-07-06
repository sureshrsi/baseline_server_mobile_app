const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LoanParticularDetails = sequelize.define('loanparticulars', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      loan_particular : {
        type: DataTypes.STRING
      },
      source_bank: {
        type: DataTypes.STRING
      },
      source_money_lender: {
        type: DataTypes.STRING
      },
      source_dealer: {
        type: DataTypes.STRING
      },
      source_fellow_farmer: {
        type: DataTypes.STRING
      },
      source_shg: {
        type: DataTypes.STRING
      },
      other_source : {
        type: DataTypes.STRING
      },
      source_total: {
        type: DataTypes.STRING
      },
      purpose_agriculture: {
        type: DataTypes.STRING
      },
      purpose_consumtion: {
        type: DataTypes.STRING
      },
      education: {
        type: DataTypes.STRING
      },
      marriage: {
        type: DataTypes.STRING
      },
      others : {
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
    tableName: 'loanparticulars',
  });
  
  module.exports = LoanParticularDetails;