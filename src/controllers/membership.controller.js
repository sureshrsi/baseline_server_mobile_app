const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const MembershipDetails = require('../models/membership.model');

const getMembershipDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectMembershipDetails = `select * from public.membershipdetails t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectMembershipDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  MembershipDetails   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertMembershipDetails = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newMembershipDetails = await MembershipDetails.create({
            headId: req.body.headId,
            membershp_details: req.body.membershp_details,
            number: req.body.number
            });
    
        return res.status(201).json({
            status: 'success',
            data: newMembershipDetails
        });
    };

    const bulkInsertionMambership = async(req,res) => {
      try {
        const {id,rows} = req.body
        const membershipRowsData = await Promise.all(rows.map(async(data)=>{
          return await MembershipDetails.create({
            headId: id,
            membershp_details: data.sgh,
            number: data.number
          })
        }))
        res.status(200).json({
          success:true,
          data:membershipRowsData
        })
      } catch (error) {
        console.error("error in bulkInsertionMambership function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateMembershipDetails = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await MembershipDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedMembershipDetails = await MembershipDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedMembershipDetails);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getMembershipDetails,bulkInsertionMambership,insertMembershipDetails,updateMembershipDetails}