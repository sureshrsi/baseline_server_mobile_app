const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const ReceivedWatershedSoilLandStatusDetails = require('../models/have_received_training_watershed_status.model');

const getReceivedWatershedSoilLandStatusDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectReceivedWatershedSoilLandStatusDetails = `select * from public.have_received_watershed_soil_land_status t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectReceivedWatershedSoilLandStatusDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  ReceivedWatershedSoilLandStatusDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertReceivedWatershedSoilLandStatusDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newReceivedWatershedSoilLandStatusDetails = await ReceivedWatershedSoilLandStatusDetails.create({
            headId: req.body.headId,
            status: req.body.status
            
            });
    
        return res.status(201).json({
            status: 'success',
            data: newReceivedWatershedSoilLandStatusDetails
        });
    };
    
    
    const updateReceivedWatershedSoilLandStatusDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await ReceivedWatershedSoilLandStatusDetails.update({
            headId: req.body.headId,
            status: req.body.status
            }, {
            where: { headId: id },
          });
          if (updated) {
            const updatedReceivedWatershedSoilLandStatusDetails = await ReceivedWatershedSoilLandStatusDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedReceivedWatershedSoilLandStatusDetails);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getReceivedWatershedSoilLandStatusDetails,insertReceivedWatershedSoilLandStatusDetails,updateReceivedWatershedSoilLandStatusDetails}