const  Item  = require('../models/aadharSearchItem.model');
const { Op,DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const  getDistrict = async(req,res) => {
    try {
        const query = `select * from district`
        const queryResult = await sequelize.query(query,{
                type:sequelize.QueryTypes.SELECT
            })
        res.status(200).json(queryResult)
    } catch (error) {
        console.error("error in getdistrict function",error)

    }
}

async function getWcc(req,res){
    try {
        const {id} = req.query
        const wccQuery = `select * from wcc t1 where t1."dist_id"=:value`
        const replacements = {value : `${id}`}   
        const queryResult = await sequelize.query
        (wccQuery,
            {replacements,
                type:sequelize.QueryTypes.SELECT})
        res.status(200).json(queryResult)
    } catch (error) {
        console.error("Error in the getWcc function",error)
    }
}

async function getProject(req,res){
    try {
        const {id} = req.query
        const projectQuery = `select * from project p1 where p1.wcc_id = :value`
        const replacements = {value : `${id}`}
        const queryResult = await sequelize.query(projectQuery,{replacements,
            type:sequelize.QueryTypes.SELECT})
        res.status(200).json(queryResult)
    } catch (error) {
        console.error("Error in getProject function",error)
    }
}

async function getWaterShedVillage(req,res){
try {
    const {id} = req.query
    const waterShedQuery = `select * from microwatershed m1 where m1.project_id= :value`
    const replacements = {value : `${id}`}
    const queryResult = await sequelize.query(waterShedQuery,{replacements,
        type:sequelize.QueryTypes.SELECT})
    res.status(200).json(queryResult)
} catch (error) {
    console.error("Error in getWaterShedVillage function",error)
}
}

async function getHabitaion(req,res){
    try {
        const {id} = req.query
        const habitationQuery = `select * from habitation h1 where h1.micro_watershed_id = :value` 
        const replacements = {value : `${id}`}
        const queryResult = await sequelize.query(habitationQuery,{replacements,
            type:sequelize.QueryTypes.SELECT})
        res.status(200).json(queryResult)
    } catch (error) {
        console.error("Error in getHabitation function",error)
    }
}

async function getMandal(req,res){
    try {
        const {id} = req.query
        const mandalQuery = `select * from mandal m1 where m1.dist_id=:value`
        const replacements = {value : `${id}`}
        const queryResult = await sequelize.query(mandalQuery,
            {replacements,type:sequelize.QueryTypes.SELECT})
        res.status(200).json(queryResult)
    } catch (error) {
        console.error("error in getMandal function",error)
    }
}

async function getGramPanchayat(req,res){
    try {
        const {id} = req.query
        const gramPanchayatQuery = `select * from grampanchayat where micro_id = :value`
        const replacements = {value : `${id}`}
        const queryResult = await sequelize.query(gramPanchayatQuery,{replacements,
            type:sequelize.QueryTypes.SELECT})
        res.status(200).json(queryResult)
        console.log("================================",queryResult)
    } catch (error) {
        console.error("Error in getGramPanchayat function",error)
    }
}
module.exports = {getDistrict,getWcc,getProject,getWaterShedVillage,getHabitaion,getMandal,getGramPanchayat}