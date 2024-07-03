const sequelize = require('../config/database');
const {IncomeKharif,landparticulars} = require('../models/incomeCropsKharif.model');


const createIncomeCrops = async (req, res, next) => {
    
    const {  rows } = req.body; 
    console.log(rows,'**************************');

     // Insert each row into the database using Sequelize
     const newHouseholder = await IncomeKharif.create({
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
        data: newHouseholder,
    });
};

const bulkInsertionIncomeCrops = async(req,res) =>{
  try {
    const incomeCropsRows = req.body.rows
    const result = await Promise.all(incomeCropsRows.map(async(data)=>{
      return await IncomeKharif.IncomeKharif.create({
        crop_grown : data.crop_grown,
        rainfed_area : data.rainfed_area,
        rainfed_yield : data.rainfed_yield,
        rainfed_cost_of_cultivation : data.rainfed_cost_of_cultivation,
        rainfed_rate_per_qtls : data.rainfed_rate_per_qtls,
        rainfed_gross_income : data.rainfed_gross_income,
        rainfed_net_income : data.rainfed_net_income,
        irrigated_area : data.irrigated_area,
        irrigated_yield : data.irrigated_yield,
        irrigated_cost_of_cultivation : data.irrigated_cost_of_cultivation,
        irrigated_rate_per_qtls : data.irrigated_rate_per_qtls,
        irrigated_gross_income : data.irrigated_gross_income,
        irrigated_net_income : data.irrigated_net_income,
        headId : data.headId
      })
    }))
    res.status(200).json({
      success:true,
      data:result
    })
  } catch (error) {
    console.error("error in bulkInsertionIncomeCrops function",error)
    res.status(400).json({
      success:false,
      data:error
    })
  }
}

async function landParticularsData(req,res){
  try {
    const result = await landparticulars.create({
      headId : req.body.headId,
      cultivated_area:req.body.cultivated_area,
      rainfed:req.body.rainfed,
      irrigated:req.body.irrigated,
      total:req.body.total,
      Type_of_ownership:req.body.Type_of_ownership
    })
    return res.status(200).json({
      success:true,
      data:result
    })
  } catch (error) {
    console.error("error in landParticularsData function",error)
    res.status(400).json({
      success:false
    })
  }
}

const bulkInsertionLandParticulars = async(req,res) =>{
  try {
    const landParticularsRows = req.body.rows
    const result = await Promise.all(landParticularsRows.map(async(data)=>{
      return await IncomeKharif.landparticulars.create({
        cultivated_area:data.cultivated_area,
        rainfed:data.rainfed,
        irrigated:data.irrigated,
        total:data.total,
        Type_of_ownership:data.Type_of_ownership
      })
    }))
    res.status(200).json({
      success:true,
      data:result
    })
  } catch (error) {
    console.error("error in bulkInsertionLandParticulars fucntion",error)
    res.status(400).json({
      success:false,
      data:error
    })
  }
}

// const updateLandParticulars = async (req,res) =>{
//   try{
//       const { rows} = req.body;
//       console.log('getting data from frontend',rows)
//       const queries = rows.map(row => {
//           return sequelize.query(
//             `UPDATE landparticulars 
//              SET 
//                cultivated_area = :cultivated_area, 
//                rainfed = :rainfed, 
//                irrigated = :irrigated, 
//                total = :total, 
//                "Type_of_ownership" = :Type_of_ownership 
//              WHERE 
//                id = :id`,
//             {
//               replacements: {
//                   cultivated_area: row.cultivated_area,
//                   rainfed: row.rainfed,
//                   irrigated: row.irrigated,
//                   total: row.total,
//                   Type_of_ownership: row.Type_of_ownership,
//                   id: row.id
//               },
//               type: sequelize.QueryTypes.UPDATE,
//             }
//           );
//         });
//          // Execute all queries
// await Promise.all(queries);
//   }
//   catch (error) {
//       console.error('Error at update Household members:', error);
//       res.status(500).json({ error: error.message });
//   }
 
// }
const updateLandParticulars = async (req,res) =>{
const { id } = req.params;
    try {
      const [updated] = await landparticulars.update(req.body, {
        where: { id: id },
      });
      if (updated) {
        const updatedLandParticular = await landparticulars.findOne({ where: { id: id } });
        res.status(200).json(updatedLandParticular);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const updateIncomeKharif = async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await IncomeKharif.update(req.body, {
        where: { id: id },
      });
      if (updated) {
        const updatedIncomeKharif = await IncomeKharif.findOne({ where: { id: id } });
        res.status(200).json(updatedIncomeKharif);
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



module.exports = {createIncomeCrops,bulkInsertionLandParticulars,updateIncomeKharif,bulkInsertionIncomeCrops,landParticularsData,updateLandParticulars}

