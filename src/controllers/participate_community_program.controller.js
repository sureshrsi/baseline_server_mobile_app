const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const ParticipationCommunityProgramDetails = require('../models/participation_community_program.model');


const getParticipationCommunityProgramDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectParticipationCommunityProgramDetails = `select * from public.participation_community_program t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectParticipationCommunityProgramDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  ParticipationCommunityProgramDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertParticipationCommunityProgramDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newParticipationCommunityProgram = await ParticipationCommunityProgramDetails.create({
            headId: req.body.headId,
            name_of_the_community_program: req.body.name_of_the_community_program,
            tick_mark_appropriate: req.body.tick_mark_appropriate,
            yes_or_no: req.body.yes_or_no
            });
    
        return res.status(201).json({
            status: 'success',
            data: newParticipationCommunityProgram,
        });
    };
    
    const bulkInsertionCommunityProgram = async(req,res) =>{
      try {
        const programRows = req.body.rows
        const programRowsData = await Promise.all(programRows.map(async(data)=>{
          return await ParticipationCommunityProgramDetails.create({
            headId: data.headId,
            name_of_the_community_program: data.name_of_the_community_program,
            tick_mark_appropriate: data.tick_mark_appropriate,
            yes_or_no: data.yes_or_no
          })
        }))
        res.status(200).json({
          success:true,
          data:programRowsData
        })
      } catch (error) {
        console.error("error in participateCommunityProgram fucntion",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    const updateParticipationCommunityProgramDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await ParticipationCommunityProgramDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedParticipationCommunityProgram = await ParticipationCommunityProgramDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedParticipationCommunityProgram);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getParticipationCommunityProgramDetails,bulkInsertionCommunityProgram,insertParticipationCommunityProgramDetails,updateParticipationCommunityProgramDetails}