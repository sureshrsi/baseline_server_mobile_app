const sequelize = require('../config/database');
const { Op,DataTypes } = require('sequelize');
const SourceQualityWaterDetails = require('../models/source_quality_water.model')

const getSourceQualityWaterDetails = async (req,res) =>{
    try{
        const  {id}  = req.query;
        console.log('Search query name:', id);
        const SelectSourceQualityWaterDetails = `select * from public.source_quality_water t1 where t1."headId" = :value`
        const replacements = { value: id }; // Adjust this as per your need
        const items = await sequelize.query(SelectSourceQualityWaterDetails, {
                       replacements,
                       type: sequelize.QueryTypes.SELECT // Specify the type of query
                     });
                     res.status(200).json(items);
                 } catch (error) {
                   console.error('Error at  Drinking Water Details   details executing query:', error);
                   res.status(500).json({ error: 'Internal Server Error' });
                 }
    } 


    const insertSourceQualityWater = async (req, res, next) => {
    
    
         // Insert each row into the database using Sequelize
         const newSourceQualityWater = await SourceQualityWaterDetails.create({
            headId: req.body.headId,
            water_source: req.body.water_source,
            driedupwell_or_borewell_nos: req.body.driedupwell_or_borewell_nos,
            functioning_well_or_borewell_nos: req.body.functioning_well_or_borewell_nos,
            present_water_level: req.body.present_water_level,
            yield_from_borewell: req.body.yield_from_borewell,
            irrigated_agri_kharif: req.body.irrigated_agri_kharif,
            irrigated_agri_rabhi: req.body.irrigated_agri_rabhi,
            irrigated_agri_summer: req.body.irrigated_agri_summer,
            other_corps: req.body.other_corps,
            horticulture: req.body.horticulture,
            water_quality: req.body.water_quality
            });
    
        return res.status(201).json({
            status: 'success',
            data: newSourceQualityWater,
        });
    };

    const bulkInsertionSourceQuality = async(req,res) => {
      try {
        const {id,rows} = req.body
        const result = await Promise.all(rows.map(async(data)=>{
          return await SourceQualityWaterDetails.create({
            headId: id,
            water_source: data.waterSource,
            driedupwell_or_borewell_nos: data.driedupWell,
            functioning_well_or_borewell_nos: data.functioningWell,
            present_water_level: data.presentApproximateWaterLevel,
            yield_from_borewell: data.yieldfromtheBorewell,
            irrigated_agri_kharif: data.kharif,
            irrigated_agri_rabhi: data.rabi,
            irrigated_agri_summer: data.summer,
            other_corps: data.otherCrops,
            horticulture: data.horticulture,
            water_quality: data.waterquality
          })
        }))
        res.status(200).json({
          success:true,
          data:result
        })
      } catch (error) {
        console.error("error in bulkInsertionSourceQuality function",error)
        res.status(400).json({
          success:false,
          data:error
        })
      }
    }
    
    
    const updateSourceQualityWater = async (req, res) => {
        const { id } = req.params;
        try {
          const [updated] = await SourceQualityWaterDetails.update(req.body, {
            where: { id: id },
          });
          if (updated) {
            const updatedSourceQualityWater = await SourceQualityWaterDetails.findOne({ where: { id: id } });
            res.status(200).json(updatedSourceQualityWater);
          } else {
            res.status(404).json({ message: 'Record not found' });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


module.exports = {getSourceQualityWaterDetails,bulkInsertionSourceQuality,insertSourceQualityWater,updateSourceQualityWater}