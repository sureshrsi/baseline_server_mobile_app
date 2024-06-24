const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const FodderFeedDetails = require('../models/fodderandfeed.model')

const getFodderFeedDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectFodderFeedDetails = `select * from public.fodderfeeddetails t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectFodderFeedDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  FodderFeedDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertFodderFeedDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newFodderFeed = await FodderFeedDetails.create({
            headId: req.body.headId,
            fodderfeed_item: req.body.fodderfeed_item,
            fodderfeed_units : req.body.fodderfeed_units,
            fodderfeed_area_quantity: req.body.fodderfeed_area_quantity,
            fodderfeed_production: req.body.fodderfeed_production
            });
    
        return res.status(201).json({
            status: 'success',
            data: newFodderFeed,
        });
    };
    
    
    const updateFodderFeedDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await FodderFeedDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedFodderFeed = await FodderFeedDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedFodderFeed);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getFodderFeedDetails,insertFodderFeedDetails,updateFodderFeedDetails}