const  Item  = require('../models/aadharSearchItem.model');
const { Op,DataTypes } = require('sequelize');
const sequelize = require('../config/database');


console.log('Item model in controller:', Item !== undefined);

const searchItems = async (req, res) => {
    try {
        const { query } = req.query;
        console.log('Search query:', query);
        const items = await Item.findAll({
            where: {
                name: {
                    [Op.like]: `%${query}%`
                }
            }
        });
        console.log('Items found:', items.length);
        res.status(200).json(items);
    } catch (error) {
        console.error('Error in searchItems:', error);
        res.status(500).json({ error: error.message });
    }
};


const searchProject = async (req,res) =>{
  try{
const { query } = req.query;
console.log('Search query name:', query);
const SelectProjectInfo = `SELECT t1.id as id,
                          t1.project_name from  
                          project t1
                          where t1.project_name ILIKE :value`
const replacements = { value: `%${query}%` }; // Adjust this as per your need
const items = await sequelize.query(SelectProjectInfo, {
                            replacements,
                            type: sequelize.QueryTypes.SELECT // Specify the type of query
                          });
                          res.status(200).json(items);
                      } catch (error) {
                        console.error('Error executing query:', error);
                        res.status(500).json({ error: 'Internal Server Error' });
                      }
  }

  const searchAadharByProject = async (req,res) =>{
    try{
const { query } = req.query;
console.log('Search query name:', query);
const SelectGeneralInfo = `SELECT t1.id as id,
t6.dist_name,
t6.dist_id,
t5.wcc_name,
t5.wcc_id,
t4.project_name,
t4.project_id,
t3.micro_watershed_name,
t3.micro_watershed_id,
t2.habitation_name,
t2.habitation_id,
t1.head_of_the_family as head_of_the_family,
t1.household_door_no as household_door_no,
t1.conatact_number as contact_number,
t1.aadhar_number,t1.job_card_no,
t1.economic_status,
t1.occupation,
t1.location,
t1.social_status as socialstatus,
t1.total_rainfed_area,
t1.total_irrigated_area,
t1.type_of_house,
t1.own_or_rented
 FROM 
generalinfo t1
INNER JOIN habitation t2 ON t1."habitationId"= t2.id 
INNER JOIN microwatershed t3 on t2.micro_watershed_id = t3.micro_watershed_id
INNER JOIN public.project t4 on t3.project_id = t4.project_id
INNER JOIN public.wcc t5 on t4.wcc_id = t5.wcc_id
INNER JOIN public.district t6 on t5.dist_id= t6.dist_id
where t4.project_id = :value`
const replacements = { value: `${query}` }; // Adjust this as per your need
const items = await sequelize.query(SelectGeneralInfo, {
                              replacements,
                              type: sequelize.QueryTypes.SELECT // Specify the type of query
                            });
                            res.status(200).json(items);
                        } catch (error) {
                          console.error('Error executing query:', error);
                          res.status(500).json({ error: 'Internal Server Error' });
                        }
    }



const searchName = async (req,res) =>{
    try{
const { query } = req.query;
console.log('Search query name:', query);
const SelectGeneralInfo = `SELECT t1.id as id,
                            t6.dist_name,
                            t6.dist_id,
                            t5.wcc_name,
                            t5.wcc_id,
                            t4.project_name,
                            t4.project_id,
                            t3.micro_watershed_name,
                            t3.micro_watershed_id,
                            t2.habitation_name,
                            t2.habitation_id,
                            t1.head_of_the_family as head_of_the_family,
                            t1.household_door_no as household_door_no,
                            t1.conatact_number as contact_number,
                            t1.aadhar_number,t1.job_card_no,
                            t1.economic_status,
                            t1.occupation,
                            t1.location,
                            t1.social_status as socialstatus,
                            t1.total_rainfed_area,
                            t1.total_irrigated_area,
                            t1.type_of_house,
                            t1.own_or_rented
                             FROM 
                            generalinfo t1
                            INNER JOIN habitation t2 ON t1."habitationId"= t2.id 
                            INNER JOIN microwatershed t3 on t2.micro_watershed_id = t3.micro_watershed_id
                            INNER JOIN public.project t4 on t3.project_id = t4.project_id
                            INNER JOIN public.wcc t5 on t4.wcc_id = t5.wcc_id
                            INNER JOIN public.district t6 on t5.dist_id= t6.dist_id
                            where t1.head_of_the_family ILIKE :value`
const replacements = { value: `%${query}%` }; // Adjust this as per your need
const items = await sequelize.query(SelectGeneralInfo, {
                              replacements,
                              type: sequelize.QueryTypes.SELECT // Specify the type of query
                            });
                            res.status(200).json(items);
                        } catch (error) {
                          console.error('Error executing query:', error);
                          res.status(500).json({ error: 'Internal Server Error' });
                        }
    }


const getHouseHoldInfo = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectHouseHoldInfo = `select *
        from public.householdmembers t1 
        where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectHouseHoldInfo, {
                replacements,
                type: sequelize.QueryTypes.SELECT // Specify the type of query
              });
              res.status(200).json(items);
          } catch (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    }

const getLandPariculars = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectLandParticulars = `select * from public.landparticulars t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectLandParticulars, {
                    replacements,
                    type: sequelize.QueryTypes.SELECT // Specify the type of query
                  });
                  res.status(200).json(items);
              } catch (error) {
                console.error('Error executing query:', error);
                res.status(500).json({ error: 'Internal Server Error' });
              }
    }
const getIncomeFromKharif = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectIncomeFromKharif = `select * from public.incomecrops t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectIncomeFromKharif, {
                                      replacements,
                                      type: sequelize.QueryTypes.SELECT // Specify the type of query
                                    });
                                    res.status(200).json(items);
                                } catch (error) {
                                  console.error('Error executing query:', error);
                                  res.status(500).json({ error: 'Internal Server Error' });
                                }
    }
const getIncomeFromRabhi = async (req,res) =>{
  try{
      const  {id}  = req.query;
      console.log('Search query name:', id);
      const SelectIncomeFromRabhi = `select * from public.incomecrops_rabhi t1 where t1."headId" = :value`
      const replacements = { value: id }; // Adjust this as per your need
      const items = await sequelize.query(SelectIncomeFromRabhi, {
                                    replacements,
                                    type: sequelize.QueryTypes.SELECT // Specify the type of query
                                  });
                                  res.status(200).json(items);
                              } catch (error) {
                                console.error('Error executing query:', error);
                                res.status(500).json({ error: 'Internal Server Error' });
                              }
  }   

  const getLiveStockDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectLiveStockDetails = `select * from public.livestockdetails t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectLiveStockDetails, {
                                      replacements,
                                      type: sequelize.QueryTypes.SELECT // Specify the type of query
                                    });
                                    res.status(200).json(items);
                                } catch (error) {
                                  console.error('Error at live stock details executing query:', error);
                                  res.status(500).json({ error: 'Internal Server Error' });
                                }
    } 

    const getMigrationDetails = async (req,res) =>{
      try{
          const  {id}  = req.query;
          console.log('Search query name:', id);
          const SelectMigrationDetails = `select * from public.migratestatus t1 where t1."headId" = :value`
          const replacements = { value: id }; // Adjust this as per your need
          const items = await sequelize.query(SelectMigrationDetails, {
                                        replacements,
                                        type: sequelize.QueryTypes.SELECT // Specify the type of query
                                      });
                                      res.status(200).json(items);
                                  } catch (error) {
                                    console.error('Error at Migration Details details executing query:', error);
                                    res.status(500).json({ error: 'Internal Server Error' });
                                  }
      } 

    


const updateHouseHoldFamilyMembers = async (req,res) =>{
    try{
        const { rows} = req.body;
        console.log('getting data from frontend',rows)
        const queries = rows.map(row => {
            return sequelize.query(
              `UPDATE householdmembers 
               SET 
                 name_of_the_family_member = :name_of_the_family_member, 
                 relationship_with_head = :relationship_with_head, 
                 disability = :disability, 
                 gender = :gender, 
                 age = :age, 
                 level_of_education = :level_of_education, 
                 occupation = :occupation, 
                 annual_gross_income = :annual_gross_income, 
                 membership = :membership
               WHERE 
                 id = :id`,
              {
                replacements: {
                  name_of_the_family_member: row.name_of_the_family_member,
                  relationship_with_head: row.relationship_with_head,
                  disability: row.disability,
                  gender: row.gender,
                  age: row.age,
                  level_of_education: row.level_of_education,
                  occupation: row.occupation,
                  annual_gross_income: row.annual_gross_income,
                  membership: row.membership,
                  id: row.id
                },
                type: sequelize.QueryTypes.UPDATE,
              }
            );
          });
           // Execute all queries
  await Promise.all(queries);
    }
    catch (error) {
        console.error('Error at update Household members:', error);
        res.status(500).json({ error: error.message });
    }
   
}

const updateLandParticulars = async (req,res) =>{
    try{
        const { rows} = req.body;
        console.log('getting data from frontend',rows)
        const queries = rows.map(row => {
            return sequelize.query(
              `UPDATE landparticulars 
               SET 
                 cultivated_area = :cultivated_area, 
                 rainfed = :rainfed, 
                 irrigated = :irrigated, 
                 total = :total, 
                 "Type_of_ownership" = :Type_of_ownership 
               WHERE 
                 id = :id`,
              {
                replacements: {
                    cultivated_area: row.cultivated_area,
                    rainfed: row.rainfed,
                    irrigated: row.irrigated,
                    total: row.total,
                    Type_of_ownership: row.Type_of_ownership,
                    id: row.id
                },
                type: sequelize.QueryTypes.UPDATE,
              }
            );
          });
           // Execute all queries
  await Promise.all(queries);
    }
    catch (error) {
        console.error('Error at update Household members:', error);
        res.status(500).json({ error: error.message });
    }
   
}


       
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description,aadharNumber } = req.body;
    
        const item = await Item.findByPk(id);
        console.log('requested item is',item)
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        item.name = name || item.name;
        item.description = description || item.description;
        item.aadharNumber = aadharNumber || item.aadharNumber;
        console.log('updating items ' ,item.name,item.description,'*****************',name,description)
        await item.save();

        res.status(200).json(item);
    } catch (error) {
        console.error('Error in updateItem:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { searchItems,
    updateItem ,
    searchProject,
    searchAadharByProject,
    searchName,
    getHouseHoldInfo,
    updateHouseHoldFamilyMembers,
    getLandPariculars,
    updateLandParticulars,
    getIncomeFromKharif,
    getIncomeFromRabhi,
    getLiveStockDetails,
    getMigrationDetails};