const sequelize = require('../config/database');
const householdmembers = require('../models/householdDetails.model');

async function insertHouseholdDetails(req,res){
    try {
        const result = await householdmembers.create({
            headId: req.body.headId,
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


const updateHouseHoldFamilyMembers = async (req, res) => {
    console.log('updating happening')
    const { id } = req.params;
    try {
      const [updated] = await householdmembers.update(req.body, {       
        where: { id: id },
      });
      if (updated) {
        const updatedhouseHold= await householdmembers.findOne({ where: { id: id } });
        res.status(200).json(updatedhouseHold);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

async function bulkInsertionHouseholdMembers(req,res){
    try {
         const { id, rows } = req.body; 
        // const householdMembersRows = req.body.rows
        const householdAssetRowsData = await Promise.all(rows.map(async(members)=>{
            return await householdmembers.create({
                name_of_the_family_member:members.name_of_the_family_member,
                relationship_with_head:members.relationship_with_head,
                disability:members.disability,
                gender:members.gender,
                age:members.age,
                level_of_education:members.level_of_education,
                occupation:members.occupation,
                membership:members.membership,
                annual_gross_income:members.annual_gross_income,
                headId:id
            })
        }))
        res.status(200).json({
            sucess:true,
            data:householdAssetRowsData
        })
    } catch (error) {
        console.error("error in bulkInsertionHouseholdMembers fucntion",error)
        res.status(400).json({
            success:false,
            data:error
        })
    }
}
module.exports = {insertHouseholdDetails,bulkInsertionHouseholdMembers,updateHouseHoldFamilyMembers}

