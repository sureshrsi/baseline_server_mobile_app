const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const FamilyExpenditureDetails = require('../models/family_expenditure.model')

const getFamilyExpenditureDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectLoanParticularDetails = `select * from public.familyexpenditure t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectLoanParticularDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at LoanParticular Details  details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertFamilyExpenditure = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newFamilyExpenditure = await FamilyExpenditureDetails.create({
            headId: req.body.headId,
            items: req.body.items,
            expenditure_per_last_year: req.body.expenditure_per_last_year
            });
    
        return res.status(201).json({
            status: 'success',
            data: newFamilyExpenditure,
        });
    };
    
    const bulkInsertionFamilyExpenditure = async(req,res) => {
      try {
        const familyExpenditureRows = req.body.rows
        const familyExpendituresRowsData = await Promise.all(familyExpenditureRows.map(async(expenditure)=>{
          return await FamilyExpenditureDetails.create({
            headId: expenditure.headId,
            items: expenditure.items,
            expenditure_per_last_year: expenditure.expenditure_per_last_year
          })
        }
       ))
        res.status(200).json({
        success:true,
        data:familyExpendituresRowsData
       })
      } catch (error) {
        console.error("error in bulkInsertionFamilyExpenditure function",error)
         res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    const updateFamilyExpenditure = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await FamilyExpenditureDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedFamilyExpenditure = await FamilyExpenditureDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedFamilyExpenditure);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getFamilyExpenditureDetails,bulkInsertionFamilyExpenditure,insertFamilyExpenditure,updateFamilyExpenditure}