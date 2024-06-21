const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const generalinfo = sequelize.define('generalinfo', {
    head_of_the_family: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    household_door_no: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    conatact_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    aadhar_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    job_card_no: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    economic_status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    social_status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    total_rainfed_area: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    total_irrigated_area: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type_of_house: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    own_or_rented: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    district: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mandal: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    wcc_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name_of_habitation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name_of_the_micro_watershed: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name_of_project: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name_of_the_grampanchayat: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'generalinfo' // Ensure table name matches the database
});

console.log('Item model defined:', generalinfo !== undefined);

module.exports = generalinfo;