const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const AgriImplementsDetails = require('../models/agriculture_implements_model')

const getAgriImplementsDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectAgriImplementsDetails = `select * from public.agriimplements t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectAgriImplementsDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  AgriImplementsDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertAgriImplementsDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newAgriImplements = await AgriImplementsDetails.create({
            headId: req.body.headId,
            water_source: req.body.water_source,
            implements: req.body.implements,
            no_of_implements: req.body.no_of_implements,
            implements_ownerd_hired: req.body.implements_ownerd_hired
            });
    
        return res.status(201).json({
            status: 'success',
            data: newAgriImplements,
        });
    };
    
    
    const updateAgriImplementsDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await AgriImplementsDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedAgriImplements = await AgriImplementsDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedSourceQualityWater);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getAgriImplementsDetails,insertAgriImplementsDetails,updateAgriImplementsDetails}