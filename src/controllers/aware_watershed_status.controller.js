const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const AwareWatershedSoilLandStatusDetails = require('../models/aware_watershed_status.model');

const getAwareWatershedSoilLandStatusDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectAwareWatershedSoilLandStatusDetails = `select * from public.aware_watershed_soil_land_status t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectAwareWatershedSoilLandStatusDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  AwareWatershedSoilLandStatusDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertAwareWatershedSoilLandStatusDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newAwareWatershedSoilLandStatusDetails = await AwareWatershedSoilLandStatusDetails.create({
            headId: req.body.headId,
            status: req.body.status
            
            });
    
        return res.status(201).json({
            status: 'success',
            data: newAwareWatershedSoilLandStatusDetails
        });
    };
    
    
    const updateAwareWatershedSoilLandStatusDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await AwareWatershedSoilLandStatusDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedAwareWatershedSoilLandStatusDetails = await AwareWatershedSoilLandStatusDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedAwareWatershedSoilLandStatusDetails);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getAwareWatershedSoilLandStatusDetails,insertAwareWatershedSoilLandStatusDetails,updateAwareWatershedSoilLandStatusDetails}