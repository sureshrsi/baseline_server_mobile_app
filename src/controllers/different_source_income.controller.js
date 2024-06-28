const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const DifferentSourceIncomeDetails = require('../models/different_source_income.model')

const getDifferentSourceIncomeDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectDifferentSourceIncomeDetails = `select * from public.different_source_income t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectDifferentSourceIncomeDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  Different Source Income Details    details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertDifferentSourceIncome = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newDifferentSourceIncome = await DifferentSourceIncomeDetails.create({
            headId: req.body.headId,
            source: req.body.source,
            income_during_the_year: req.body.income_during_the_year
            });
    
        return res.status(201).json({
            status: 'success',
            data: newDifferentSourceIncome,
        });
    };
    
    const differentSourcesIncome = async(req,res) => {
      try {
        const sourceIncomeRows = req.body.rows
        const sourceIncomeData = await Promise.all(sourceIncomeRows.map(async(income)=>
        {
          return await DifferentSourceIncomeDetails.create({
            headId: income.headId,
            source: income.source,
            income_during_the_year: income.income_during_the_year
          })
        }))
        res.status(200).json({
          success:true,
          data:sourceIncomeData
        })
      } catch (error) {
        console.error("error in differentSourcesIncome function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    const updateDifferentSourceIncome = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await DifferentSourceIncomeDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedFamilyExpenditure = await DifferentSourceIncomeDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedFamilyExpenditure);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getDifferentSourceIncomeDetails,differentSourcesIncome,insertDifferentSourceIncome,updateDifferentSourceIncome}