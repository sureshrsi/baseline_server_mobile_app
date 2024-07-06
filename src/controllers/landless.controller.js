const  LandLessDetails  = require('../models/landlessdetails.model');
const { Op,DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const getLandLessDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectLandLessDetails = `select * from public.landlessdetails t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectLandLessDetails, {
                                      replacements,
                                      type: sequelize.QueryTypes.SELECT // Specify the type of query
                                    });
                                    res.status(200).json(items);
                                } catch (error) {
                                  console.error('Error at Migration Details details executing query:', error);
                                  res.status(500).json({ error: 'Internal Server Error' });
                                }
    } 


    const insertLandLess = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newLandLess = await LandLessDetails.create({
            headId: req.body.headId,
            name_of_the_scheme_or_project: req.body.name_of_the_scheme_or_project,
            mandays: req.body.mandays,
            wage_per_day: req.body.wage_per_day,
            income: req.body.income,
            });
        console.log("=================DATA===================",newLandLess)
        return res.status(201).json({
            status: 'success',
            data: newLandLess,
        });
    };
    
    const bulkInsertionLandless = async(req,res) => {
      try {
        const {id,rows} = req.body
        const landLessRowsData = await Promise.all(rows.map(async(data)=>{
          return await LandLessDetails.create({
            headId: id,
            name_of_the_scheme_or_project: data.nameOfTheProject,
            mandays: data.manDays,
            wage_per_day: data.wageDays,
            income: data.income,
          })
        }))
        console.log("landless data",landLessRowsData)
        res.status(200).json({
          success:true,
          data:landLessRowsData
        })
      } catch (error) {
        console.log("error in bulkInsertionLandless function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    const updateLandLess = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await LandLessDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedMigrate = await LandLessDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedMigrate);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };
    


// const getLandLessDetails = async (req, res) => {
//     try {
//         const { query } = req.query;
//         console.log('land less query:', query);
//         const items = await LandLessDetails.findAll({
//             where: {
//                 headId: {
//                     [Op.eq] : `${query}`
//                 }
//             }
//         });
//         console.log('Items found:', items.length);
//         res.status(200).json(items);
//     } catch (error) {
//         console.error('Error in searchItems:', error);
//         res.status(500).json({ error: error.message });
//     }
// };

module.exports = {getLandLessDetails,bulkInsertionLandless,insertLandLess,updateLandLess}