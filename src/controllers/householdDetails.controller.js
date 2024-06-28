const sequelize = require('../config/database');
const householdmembers = require('../models/householdDetails.model');

async function insertHouseholdDetails(req,res){
    try {
        const result = await householdmembers.create({
            name_of_the_family_member:req.body.name_of_the_family_member,
            relationship_with_head:req.body.relationship_with_head,
            disability:req.body.disability,
            gender:req.body.gender,
            age:req.body.age,
            level_of_education:req.body.level_of_education,
            occupation:req.body.occupation,
            membership:req.body.membership,
            annual_gross_income:req.body.annual_gross_income
        })
        console.log("================DATA===============",result)
        return res.status(200).json(result)
    } catch (error) {
        console.error("error in insertHouseholdDetails function",error)
    }
}

async function bulkInsertionHouseholdMembers(req,res){
    try {
        const householdMembersRows = req.body.rows
        const householdAssetRowsData = await Promise.all(householdMembersRows.map(async(members)=>{
            return await householdmembers.create({
                name_of_the_family_member:members.name_of_the_family_member,
                relationship_with_head:members.relationship_with_head,
                disability:members.disability,
                gender:members.gender,
                age:members.age,
                level_of_education:members.level_of_education,
                occupation:members.occupation,
                membership:members.membership,
                annual_gross_income:members.annual_gross_income
            })
        }))
        res.status(200).json({
            sucess:true,
            data:householdAssetRowsData
        })
    } catch (error) {
        console.error("error in bulkInsertionHouseholdMembers fucntion",error)
        req.status(400).json({
            success:false,
            data:error
        })
    }
}
module.exports = {insertHouseholdDetails,bulkInsertionHouseholdMembers}