const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const ManureChemicalDetails = require('../models/manure_chemical_fertilizer.model')

const getManureChemicalDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectManureChemicalDetails = `select * from public.manurechemicalfertilizers t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectManureChemicalDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at manurechemicalfertilizers Details details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertManureChemical = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newManureChemical = await ManureChemicalDetails.create({
            headId: req.body.headId,
            crops: req.body.crops,
            organic: req.body.organic,
            micro_nutrients: req.body.micro_nutrients,
            chemical_N: req.body.chemical_N,
            chemical_P: req.body.chemical_P,
            chemical_K: req.body.chemical_K,
            cost: req.body.cost
            });
    
        return res.status(201).json({
            status: 'success',
            data: newManureChemical,
        });
    };

    const bulkInsertionManureChemical = async(req,res) => {
      try {
        const {id,rows} = req.body
        const manureChemicalRowsData = await Promise.all(rows.map(async(data)=>{
          return await ManureChemicalDetails.create({
            headId: id,
            crops: data.crops,
            organic: data.organic,
            micro_nutrients: data.microNutrients,
            chemical_N: data.N,
            chemical_P: data.P,
            chemical_K: data.K,
            cost: data.cost
          })
        }))
        console.log("manure chemical",manureChemicalRowsData)
        res.status(200).json({
          success:true,
          data:manureChemicalRowsData
        })
      } catch (error) {
        console.error("error in bulkInsertionManureChemical function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateManureChemical = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await ManureChemicalDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedManureChemical = await ManureChemicalDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedManureChemical);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getManureChemicalDetails,bulkInsertionManureChemical,insertManureChemical,updateManureChemical}