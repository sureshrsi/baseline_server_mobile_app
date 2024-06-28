const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const AnySchemePreviousProjectDetails = require('../models/any_scheme_previous_project.model');

const getAnySchemePreviousProjectDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectAnySchemePreviousProjectDetails = `select * from public.membershipdetails t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectAnySchemePreviousProjectDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  MembershipDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertAnySchemePreviousProjectDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newAnySchemePreviousProjectDetails = await AnySchemePreviousProjectDetails.create({
            headId: req.body.headId,
            name_of_the_scheme_or_project: req.body.name_of_the_scheme_or_project,
            details_of_benefits_obtained: req.body.details_of_benefits_obtained,
            value_of_the_benefit: req.body.value_of_the_benefit
            });
    
        return res.status(201).json({
            status: 'success',
            data: newAnySchemePreviousProjectDetails
        });
    };

    const bulkInsertionSchemeProjectDetails = async(req,res) => {
      try {
        const bulkInsertionSchemeRows = req.body.rows
        const insertionSchemeRows = await Promise.all(bulkInsertionSchemeRows.map(async(insertion)=>
        {
          return await AnySchemePreviousProjectDetails.create({
            headId: insertion.headId,
            name_of_the_scheme_or_project: insertion.name_of_the_scheme_or_project,
            details_of_benefits_obtained:insertion.details_of_benefits_obtained,
            value_of_the_benefit: insertion.value_of_the_benefit
          });
        }
        ));
        res.status(200).json({
          success : true,
          data : insertionSchemeRows
        })
      } catch (error) {
        console.error("error in bulkInsertionSchemeProjectDetails function",error)
      }
    }
    
    
    const updateAnySchemePreviousProjectDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await AnySchemePreviousProjectDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedAnySchemePreviousProjectDetails = await AnySchemePreviousProjectDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedAnySchemePreviousProjectDetails);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getAnySchemePreviousProjectDetails,insertAnySchemePreviousProjectDetails,updateAnySchemePreviousProjectDetails,bulkInsertionSchemeProjectDetails}