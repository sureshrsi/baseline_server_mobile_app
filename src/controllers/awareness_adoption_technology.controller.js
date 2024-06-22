const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const AwarenessAdoptionTechnologyDetails = require('../models/awareness_adoption_technology.model');

const getAwarenessAdoptionTechnologyDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectAwarenessAdoptionTechnologyDetails = `select * from public.participation_community_program t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectAwarenessAdoptionTechnologyDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  AwarenessAdoptionTechnologyDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertAwarenessAdoptionTechnologyDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newAwarenessAdoptionTechnology = await AwarenessAdoptionTechnologyDetails.create({
            headId: req.body.headId,
            name_of_the_community_program: req.body.name_of_the_community_program,
            tick_mark_appropriate: req.body.tick_mark_appropriate,
            yes_or_no: req.body.yes_or_no
            });
    
        return res.status(201).json({
            status: 'success',
            data: newAwarenessAdoptionTechnology,
        });
    };
    
    
    const updateAwarenessAdoptionTechnologyDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await AwarenessAdoptionTechnologyDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedAwarenessAdoptionTechnology = await AwarenessAdoptionTechnologyDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedAwarenessAdoptionTechnology);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getAwarenessAdoptionTechnologyDetails,insertAwarenessAdoptionTechnologyDetails,updateAwarenessAdoptionTechnologyDetails}