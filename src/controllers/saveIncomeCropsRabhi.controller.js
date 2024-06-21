const sequelize = require('../config/database');
const IncomeRabhi = require('../models/incomeCropsRabhi.model');

const insertIncomeCropsRabhi = async (req, res, next) => {
    
    const {  rows } = req.body; 
    console.log('**************************');

     // Insert each row into the database using Sequelize
     const newIncomeCropsRabhi = await IncomeRabhi.create({
            crop_grown : req.body.crop_grown,
            rainfed_area : req.body.rainfed_area,
            rainfed_yield : req.body.rainfed_yield,
            rainfed_cost_of_cultivation : req.body.rainfed_cost_of_cultivation,
            rainfed_rate_per_qtls : req.body.rainfed_rate_per_qtls,
            rainfed_gross_income : req.body.rainfed_gross_income,
            rainfed_net_income : req.body.rainfed_net_income,
            irrigated_area : req.body.irrigated_area,
            irrigated_yield : req.body.irrigated_yield,
            irrigated_cost_of_cultivation : req.body.irrigated_cost_of_cultivation,
            irrigated_rate_per_qtls : req.body.irrigated_rate_per_qtls,
            irrigated_gross_income : req.body.irrigated_gross_income,
            irrigated_net_income : req.body.irrigated_net_income,
            headId : req.body.headId
        });

    return res.status(201).json({
        status: 'success',
        data: newIncomeCropsRabhi,
    });
};


const updateIncomeRabhi = async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await IncomeRabhi.update(req.body, {
        where: { id: id },
      });
      if (updated) {
        const updatedIncomeRabhi = await IncomeRabhi.findOne({ where: { id: id } });
        res.status(200).json(updatedIncomeRabhi);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {insertIncomeCropsRabhi,updateIncomeRabhi}
