const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const FodderFuelDetails = require('../models/fodderfuel.model')

const getFodderFuelDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectFodderFuelDetails = `select * from public.fodderfuel t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectFodderFuelDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  FodderFuelDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertFodderFuelDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newFodderFuel = await FodderFuelDetails.create({
            headId: req.body.headId,
            foldder_details: req.body.foldder_details,
            fodder_utilisation: req.body.fodder_utilisation,
            cow_dung: req.body.cow_dung,
            fire_wood: req.body.fire_wood,
            agriculture_waste: req.body.agriculture_waste
            });
    
        return res.status(201).json({
            status: 'success',
            data: newFodderFuel,
        });
    };

    const fodderFuelDetails = async(req,res) => {
      try {
        const fodderFuelDetailsRows = req.body.rows
        const fodderFuelDetailsData = await Promise.all(fodderFuelDetailsRows.map(async(details)=>{
          return await FodderFuelDetails.create({
            headId: details.headId,
            foldder_details: details.foldder_details,
            fodder_utilisation: details.fodder_utilisation,
            cow_dung: details.cow_dung,
            fire_wood: details.fire_wood,
            agriculture_waste: details.agriculture_waste
          })
        }))
        res.status(200).json({
          success:true,
          data:fodderFuelDetailsData
        })
      } catch (error) {
        console.error("error in fodderFuelDetails function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateFodderFuelDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await FodderFuelDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedFodderFuel = await FodderFuelDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedFodderFuel);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getFodderFuelDetails,fodderFuelDetails,insertFodderFuelDetails,updateFodderFuelDetails}