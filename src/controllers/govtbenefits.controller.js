const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const GovtSchemes = require('../models/govtbenefits.model')

const getGovtBenefitsDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectGovtBenefitDetails = `select * from public.govtschemes t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectGovtBenefitDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at govtschemes Details details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertGovtBenefits = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newGovtBenefit = await GovtSchemes.create({
            headId: req.body.headId,
            name_of_familymember: req.body.name_of_familymember,
            scheme_name: req.body.scheme_name,
            amount: req.body.amount
            });
    
        return res.status(201).json({
            status: 'success',
            data: newGovtBenefit,
        });
    };

    const bulkInsertionGovtBenefits = async(req,res) =>{
      try {
        const govtBenefitsRows = req.body.rows
        const govtBenefitsRowsData = await Promise.all(govtBenefitsRows.map(async(govt)=>{
          return await GovtSchemes.create({
            headId: govt.headId,
            name_of_familymember: govt.name_of_familymember,
            scheme_name: govt.scheme_name,
            amount: govt.amount
          })
        }))
        res.status(200).json({
          success:true,
          data:govtBenefitsRowsData
        })
      } catch (error) {
        console.error("error in bulkInsertionGovtBenefits function",error)
        req.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateGovtBenefits = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await GovtSchemes.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedGovtBenefits = await GovtSchemes.findOne({ where: { id: id } });
            res.status(200).json(updatedGovtBenefits);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getGovtBenefitsDetails,bulkInsertionGovtBenefits,insertGovtBenefits,updateGovtBenefits}