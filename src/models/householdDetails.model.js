const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const householdmembers = sequelize.define('householdmembers', {
    name_of_the_family_member: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    relationship_with_head: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    disability: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    age: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    level_of_education: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    membership: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    annual_gross_income: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'householdmembers' // Ensure table name matches the database
});

console.log('Item model defined:', householdmembers !== undefined);

module.exports = householdmembers;