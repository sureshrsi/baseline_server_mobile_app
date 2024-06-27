const  generalInfo  = require('../models/headerInformation.model');
const { Op,DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const generalinfo = require('../models/headerInformation.model');

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
    } catch (error) {
        console.error("error in getGramPanchayat function",error)
    }
}

async function getIndividualInformation(req,res){
    try {
      const result = await generalinfo.create({
        district:req.body.district,
        wcc_name:req.body.wcc_name,
        name_of_project:req.body.name_of_project,
        name_of_the_micro_watershed:req.body.name_of_the_micro_watershed,
        name_of_habitation:req.body.name_of_habitation,
        mandal:req.body.mandal,
        name_of_the_grampanchayat:req.body.name_of_the_grampanchayat,
        head_of_the_family:req.body.head_of_the_family,
        household_door_no:req.body.household_door_no,
        conatact_number:req.body.conatact_number,
        aadhar_number:req.body.aadhar_number,
        job_card_no:req.body.job_card_no,
        economic_status:req.body.economic_status,
        occupation:req.body.occupation,
        location:req.body.location,
        social_status:req.body.social_status,
        total_rainfed_area:req.body.total_rainfed_area,
        total_irrigated_area:req.body.total_irrigated_area,
        type_of_house:req.body.type_of_house,
        own_or_rented:req.body.own_or_rented
      })
      return res.status(200).json(result)
    } catch (error) {
        console.error("error in getIndividualInformation function",error)
    }
}

const updateHeaderInformation = async(req,res) => {
    const {id}  = req.params;
    try {
        console.log("%%%%UPDATE%%%%%%%%%%%%%%",req.params)
      const [updated] = await generalinfo.update({
        district:req.body.district,
        wcc_name:req.body.wcc_name,
        name_of_project:req.body.name_of_project,
        name_of_the_micro_watershed:req.body.name_of_the_micro_watershed,
        name_of_habitation:req.body.name_of_habitation,
        mandal:req.body.mandal,
        name_of_the_grampanchayat:req.body.name_of_the_grampanchayat,
        head_of_the_family:req.body.head_of_the_family,
        household_door_no:req.body.household_door_no,
        conatact_number:req.body.conatact_number,
        aadhar_number:req.body.aadhar_number,
        job_card_no:req.body.job_card_no,
        economic_status:req.body.economic_status,
        occupation:req.body.occupation,
        location:req.body.location,
        social_status:req.body.social_status,
        total_rainfed_area:req.body.total_rainfed_area,
        total_irrigated_area:req.body.total_irrigated_area,
        type_of_house:req.body.type_of_house,
        own_or_rented:req.body.own_or_rented,
        id: req.body.id,
        },
         {
        where: { id: id },
      });
      if (updated) {
        const updateGeneral = await generalinfo.findOne({ where: { id: id } });
        res.status(200).json(updateGeneral);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

module.exports = {getDistrict,getWcc,getProject,getWaterShedVillage,getHabitaion,getMandal,getGramPanchayat,getIndividualInformation,updateHeaderInformation}