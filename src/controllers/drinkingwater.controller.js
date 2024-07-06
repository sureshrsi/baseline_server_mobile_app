const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const DrinkingWaterDetails = require('../models/drinkingwater.model')

const getDrinkingWaterDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectDrinkingWaterDetails = `select * from public.availabledrinkingwater t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectDrinkingWaterDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  Drinking Water Details   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertDrinkingWater = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newDrinkingWater = await DrinkingWaterDetails.create({
            headId: req.body.headId,
            drinkingwater_item: req.body.drinkingwater_item,
            drinkingwater_units: req.body.drinkingwater_units,
            drinking_quantity: req.body.drinking_quantity,
            source_of_drinking_water: req.body.source_of_drinking_water
            });
    
        return res.status(201).json({
            status: 'success',
            data: newDrinkingWater,
        });
    };

    const bulkInsertionDrinkingWater = async(req,res) =>{
      try {
        const {id , rows} =req.body
        const drinkingWaterData = await Promise.all(rows.map(async(water)=>
        {
          return await DrinkingWaterDetails.create({
            headId: id,
            drinkingwater_item: water.drinkingwateritem,
            drinkingwater_units: water.drinkingwaterunits,
            drinking_quantity: water.litresPerDay,
            source_of_drinking_water: water.sourceDrinkingWater
          })
        }))
        res.status(200).json({
          success:true,
          data:drinkingWaterData
        })
      } catch (error) {
        console.error("error in bulkInsertionDrinkingWater function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateDrinkingWater = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await DrinkingWaterDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedDrinkingWater = await DrinkingWaterDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedDrinkingWater);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getDrinkingWaterDetails,bulkInsertionDrinkingWater,insertDrinkingWater,updateDrinkingWater}