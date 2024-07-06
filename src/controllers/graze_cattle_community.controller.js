const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const GrazeCattleCommunityDetails = require('../models/graze_cattle_community.model')

const getGrazeCattleCommunityDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectGrazeCattleCommunityDetails = `select * from public.graze_cattle_community t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectGrazeCattleCommunityDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  GrazeCattleCommunityDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertGrazeCattleCommunityDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newFodderFuel = await GrazeCattleCommunityDetails.create({
            headId: req.body.headId,
            grazing_of_cattle_or_animal: req.body.grazing_of_cattle_or_animal,
            number_of_animals: req.body.number_of_animals,
            how_many_days_in_the_year: req.body.how_many_days_in_the_year
            });
    
        return res.status(201).json({
            status: 'success',
            data: newFodderFuel,
        });
    };

    const grazeCattleDetails = async(req,res) => {
      try {
        const {id,rows} = req.body
        const cattleDetailsRowsData = await Promise.all(rows.map(async(details)=>{
          return await GrazeCattleCommunityDetails.create({
            headId: id,
            grazing_of_cattle_or_animal: details.grazingOfCattle,
            number_of_animals: details.numberOfCattle,
            how_many_days_in_the_year: details.daysInAYear
          })
        }))
        res.status(200).json({
          success:true,
          data:cattleDetailsRowsData
        })
      } catch (error) {
        console.error("error in grazeCattleDetails function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateGrazeCattleCommunityDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await GrazeCattleCommunityDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedGrazeCattleCommunity = await GrazeCattleCommunityDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedGrazeCattleCommunity);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getGrazeCattleCommunityDetails,grazeCattleDetails,insertGrazeCattleCommunityDetails,updateGrazeCattleCommunityDetails}