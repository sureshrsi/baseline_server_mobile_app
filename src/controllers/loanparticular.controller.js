const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const LoanParticularDetails = require('../models/loanparticulars.model')

const getLoanParticularDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectLoanParticularDetails = `select * from public.loanparticulars t1 where t1."headId" = :value`
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


    const insertLoanParticular = async (req, res) => {
    
    
         // Insert each row into the database using Sequelize
         const newLoanParticular = await LoanParticularDetails.create({
            headId: req.body.headId,
            loan_particular: req.body.loan_particular,
            source_bank: req.body.source_bank,
            source_money_lender: req.body.source_money_lender,
            source_dealer: req.body.source_dealer,
            source_fellow_farmer : req.body.source_fellow_farmer,
            source_shg: req.body.source_shg,
            other_source : req.body.other_source,
            source_total: req.body.source_total,
            purpose_agriculture: req.body.purpose_agriculture,
            purpose_consumtion: req.body.purpose_consumtion,
            education: req.body.education,
            marriage: req.body.marriage,
            others: req.body.others,  
            });
    
        return res.status(201).json({
            status: 'success',
            data: newLoanParticular,
        });
    };
    
    const bulkInsertionLoanParticulars = async(req,res) => {
      try {
        const {id,rows} = req.body
        const loanParticularsRowsData = await Promise.all(rows.map(async(data)=>{
          return await LoanParticularDetails.create({
            headId: id,
            loan_particular: data.particulars,
            source_bank: data.bank,
            source_money_lender: data.moneyLender,
            source_dealer: data.dealer,
            source_fellow_farmer : data.fellowfarmer,
            source_shg: data.shg,
            source_total: data.total,
            purpose_agriculture: data.agriculture,
            purpose_consumtion: data.consumption,
            education: data.education,
            marriage: data.marriage,
            others: data.others, 
          })
        }))
        console.log("loan particulars",loanParticularsRowsData)
        res.status(200).json({
          success:true,
          data:loanParticularsRowsData
        })
      } catch (error) {
        console.error("error in bulkInsertionLoanParticulars function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    const updateLoanParticular = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await LoanParticularDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedLoanParticular = await LoanParticularDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedLoanParticular);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getLoanParticularDetails,bulkInsertionLoanParticulars,insertLoanParticular,updateLoanParticular}