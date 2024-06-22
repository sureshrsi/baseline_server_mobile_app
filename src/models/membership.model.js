const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MembershipDetails = sequelize.define('membershipdetails', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      headId: {
        type: DataTypes.STRING,
      },
      membershp_details : {
        type: DataTypes.STRING
      },
      number : {
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
    tableName: 'membershipdetails',
  });
  
  module.exports = MembershipDetails;