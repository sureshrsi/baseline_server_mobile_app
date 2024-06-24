const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const HorticultureDetails = require('../models/horticulture.model')

const getHorticultureDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectHorticultureDetails = `select * from public.horticulturedetails t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectHorticultureDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  HorticultureDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertHorticultureDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newHorticulture = await HorticultureDetails.create({
            headId: req.body.headId,
            horticulture_details: req.body.horticulture_details,
            horticulture_number: req.body.horticulture_number
            });
    
        return res.status(201).json({
            status: 'success',
            data: newHorticulture,
        });
    };
    
    
    const updateHorticultureDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await HorticultureDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedHorticulture = await HorticultureDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedHorticulture);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getHorticultureDetails,insertHorticultureDetails,updateHorticultureDetails}