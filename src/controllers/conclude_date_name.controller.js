const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const DateServeyorName_Details = require('../models/conclude_date_name.model');

const getDateServeyorName_Details = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectDateServeyorName_Details = `select * from public.date_serveyor_name t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectDateServeyorName_Details, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  DateServeyorName_Details   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertDateServeyorName_Details = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newDateServeyorName_Details = await DateServeyorName_Details.create({
            headId: req.body.headId,
            date: req.body.date,
            serveyor_name: req.body.serveyor_name,
            });
    
        return res.status(201).json({
            status: 'success',
            data: newDateServeyorName_Details
        });
    };

    const bulkInsertionConcludeDateName = async(req,res) =>{
      try {
        const {headId,date,serveyor_name} = req.body
        const concludeDateNameData = await DateServeyorName_Details.create({
            headId: headId,
            date: date,
            serveyor_name: serveyor_name
          })
          console.log("insertion date time conclude surveyor name",concludeDateNameData)
        res.status(200).json({
          success:true,
          data:concludeDateNameData
        })
      } catch (error) {
        console.error("error in bulkInsertionConcludeDateName fucntion",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateDateServeyorName_Details = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await DateServeyorName_Details.update({
            headId: req.body.headId,
            date: req.body.date,
            serveyor_name: req.body.serveyor_name,
            }, {
            where: { headId: id },
          });
          if (updated) {
            const updatedDateServeyorName_Details = await DateServeyorName_Details.findOne({ where: { id: id } });
            res.status(200).json(updatedDateServeyorName_Details);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getDateServeyorName_Details,bulkInsertionConcludeDateName,insertDateServeyorName_Details,updateDateServeyorName_Details}