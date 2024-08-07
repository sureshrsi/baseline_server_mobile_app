const sequelize = require('../config/database');
const MigrationStatus = require('../models/migrate.model');

const insertMigrationStatus = async (req, res, next) => {
    
    const {  rows } = req.body; 
    console.log('**************************');

     // Insert each row into the database using Sequelize
     const newMigration = await MigrationStatus.create({
        headId: req.body.headId,
        name_of_the_person_migrating: req.body.name_of_the_person_migrating,
            male_or_female: req.body.male_or_female,
            no_of_person_migrating_per_year:
            req.body.no_of_person_migrating_per_year,
            reasons_for_migrating: req.body.reasons_for_migrating,
            place_of_migrating: req.body.place_of_migrating,
            occupation_during_migration: req.body.occupation_during_migration,
            income_for_such_occupation: req.body.income_for_such_occupation,
        });

    return res.status(201).json({
        status: 'success',
        data: newMigration,
    });
};

const bulkInsertionMigrationStatus = async(req,res) => {
  try {
    const {id,rows} = req.body
    const migrationStatusRowsData = await Promise.all(rows.map(async(data)=>{
      return await MigrationStatus.create({
        headId:id,
        name_of_the_person_migrating: data.nameOfThePerson,
            male_or_female: data.gender,
            no_of_person_migrating_per_year:data.noOfDaysMigratingPerYear,
            reasons_for_migrating: data.reasonsForMigrating,
            place_of_migrating: data.placeOfMigration,
            occupation_during_migration: data.occupationDuringMigration,
            income_for_such_occupation: data.incomeFromOccupation,
      })
    }))
    console.log("migration status",migrationStatusRowsData)
    res.status(200).json({
      success:true,
      data:migrationStatusRowsData
    })
  } catch (error) {
    console.error("error in bulkInsertionMigrationStatus function",error)
    res.status(400).json({
      success:false,
      data:error
    })
  }
}


const updateMigrationStatus = async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await MigrationStatus.update(req.body, {
        where: { id: id },
      });
      if (updated) {
        const updatedMigrate = await MigrationStatus.findOne({ where: { id: id } });
        res.status(200).json(updatedMigrate);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {insertMigrationStatus,bulkInsertionMigrationStatus,updateMigrationStatus}
