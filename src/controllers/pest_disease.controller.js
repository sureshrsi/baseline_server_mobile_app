const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const PestDiseaseDetails = require('../models/pest_disease.model')

const getPestDiseaseDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectPestDiseaseDetails = `select * from public.pestdisease t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectPestDiseaseDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at pestdisease Details details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertPestDisease = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newPestDisease = await PestDiseaseDetails.create({
            headId: req.body.headId,
            crops: req.body.crops,
            name_of_the_pest_disease: req.body.name_of_the_pest_disease,
            control_measures_biological: req.body.control_measures_biological,
            control_measures_chemical: req.body.control_measures_chemical,
            control_measures_others: req.body.control_measures_others,
            amount_spent_material: req.body.amount_spent_material,
            amount_spent_wages: req.body.amount_spent_wages
            });
    
        return res.status(201).json({
            status: 'success',
            data: newPestDisease,
        });
    };
    
    const bulkInsertionPestDisease = async(req,res) =>{
      try {
        const {id,rows} = req.body
        const pestDiseaseRowsData = await Promise.all(rows.map(async(data)=>{
          return await PestDiseaseDetails.create({
            headId: id,
            crops: data.crops,
            name_of_the_pest_disease: data.nameOfThePest,
            control_measures_biological: data.biological,
            control_measures_chemical: data.chemical,
            control_measures_others: data.others,
            amount_spent_material: data.material,
            amount_spent_wages: data.wages
          })
        }))
        console.log("insert pest disease",pestDiseaseRowsData)
        res.status(200).json({
          success:true,
          data:pestDiseaseRowsData
        })
      } catch (error) {
        console.error("error in bulkInsertionPestDisease function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    const updatePestDiSease = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await PestDiseaseDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedPestDisease = await PestDiseaseDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedPestDisease);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getPestDiseaseDetails,bulkInsertionPestDisease,insertPestDisease,updatePestDiSease}