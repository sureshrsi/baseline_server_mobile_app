const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const HouseholdAssetsDetails = require('../models/household_assets.model')

const getHouseholdAssetsDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectHouseholdAssetsDetails = `select * from public.household_assets t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectHouseholdAssetsDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  HouseholdAssetsDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertHouseholdAssetsDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newHouseholdAssets = await HouseholdAssetsDetails.create({
            headId: req.body.headId,
            assets: req.body.assets,
            number: req.body.number,
            present_value: req.body.present_value
            });
    
        return res.status(201).json({
            status: 'success',
            data: newHouseholdAssets,
        });
    };
    
    
    const updateHouseholdAssetsDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await HouseholdAssetsDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedHouseholdAssets = await HouseholdAssetsDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedHouseholdAssets);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getHouseholdAssetsDetails,insertHouseholdAssetsDetails,updateHouseholdAssetsDetails}