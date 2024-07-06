const sequelize = require('../config/database');
const LiveStockDetails = require('../models/liveStock.model');

const insertLiveStock = async (req, res, next) => {
    
    const {  rows } = req.body; 

     // Insert each row into the database using Sequelize
     const newLiveStock = await LiveStockDetails.create({
        headId: req.body.headId,
        existing_no: req.body.existing_no,
        income_generated_during_last_year:
        req.body.income_generated_during_last_year,
        milk_production: req.body.milk_production,
        milk_quantity_sold: req.body.milk_quantity_sold,
        mill_consumed: req.body.mill_consumed,
        name_of_the_animal: req.body.name_of_the_animal,
        value_of_animals: req.body.value_of_animals,
        });

    return res.status(201).json({
        status: 'success',
        data: newLiveStock,
    });
};


const updateLiveStock = async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await LiveStockDetails.update(req.body, {
        where: { id: id },
      });
      if (updated) {
        const updatedLiveStock = await LiveStockDetails.findOne({ where: { id: id } });
        res.status(200).json(updatedLiveStock);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const bulkInsertionLivestock = async (req, res) => {
    try {
      const {id,rows} = req.body; 
     const result = await Promise.all(rows.map(async (liveStock) => {
       return await LiveStockDetails.create({
         headId: id,
         existing_no: liveStock.existingNo,
         income_generated_during_last_year:liveStock.incomeGeneratedDuringLastYear,
         milk_production:liveStock.milkProductionLitresPerDay,
         milk_quantity_sold: liveStock.quantitySoldByYear,
         mill_consumed: liveStock.milkConsumedLitresPerday,
         name_of_the_animal: liveStock.nameOfTheAnimal,
         value_of_animals: liveStock.unitValue,
       });
     }));
     console.log("livestock details",result)
     return res.status(201).json({
         status: 'success',
         data: result,
     });
    } catch (error) {
      console.error("error in bulkInsertionLivestock function",error)
      res.status(400).json({
        success:false,
        data:error
      })
    }
};

module.exports = {insertLiveStock,updateLiveStock,bulkInsertionLivestock}
