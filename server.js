const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const itemRoutes = require('./src/routers/aadharSearch.router');
const sequelize = require('./src/config/database');

const IncomeKharifRoute = require('./src/routers/incomecropsKharif.route')
const IncomeRabhifRoute = require('./src/routers/incomecropsRabhi.route')
const LiveStockRoute = require('./src/routers/liveStock.route')
const migrateRoute = require('./src/routers/migrate.route')
const landlessRoute = require('./src/routers/landless.route')
const GovtBenefitRoute = require('./src/routers/govtbenefit.route')
const ManureChemicalRoute = require('./src/routers/manure_chemical.route')
const PestDiseaseRoute = require('./src/routers/pestdisease.route')
const LoanParticularRoute = require('./src/routers/loanparticular.route')
const FamilyExpenditureRoute = require('./src/routers/family_expenditure.route')
const DifferentSourceIncomeRoute = require('./src/routers/different_source_income.route')
const DrinkingWaterRoute = require('./src/routers/different_source_income.route')
const SourceQualityWaterRoute = require('./src/routers/source_quality_water.route')
const AgriImplementsRoute = require('./src/routers/agriculture.implements.route')
const HorticultureRoute = require('./src/routers/horticulture.route')
const FodderFeedRoute = require('./src/routers/fodderfeed.route')
const FodderFuelRoute = require('./src/routers/fodderfuel.route')
const GrazeCattleCommunityRoute = require('./src/routers/graze.cattle.community.route')
const HouseholdAssetsRoute = require('./src/routers/household_assets.route')
const ParticipationCommunityProgramRoute = require('./src/routers/participation_community_program.route')
const AwarenessAdoptionTechnologyRoute = require('./src/routers/awareness_adoption_technology.route')
const MembershipRoute = require('./src/routers/manure_chemical.route')
const AnySchemePreviousProjectRoute = require('./src/routers/any_scheme_previous_project.route')
const AwareWatershedSoilLandStatusRoute = require('./src/routers/aware_watershed_status.route')
const headerRoutes = require('./src/routers/headerInformation.router');
const householdRoutes = require('./src/routers/householdDetails.router');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/items',itemRoutes);
app.use('/api',IncomeKharifRoute)
app.use('/api',IncomeRabhifRoute)
app.use('/api',LiveStockRoute)
app.use('/api',headerRoutes)
app.use('/api',migrateRoute)
app.use('/api',landlessRoute)
app.use('/api',GovtBenefitRoute)
app.use('/api',ManureChemicalRoute)
app.use('/api',PestDiseaseRoute)
app.use('/api',LoanParticularRoute)
app.use('/api',FamilyExpenditureRoute)
app.use('/api',DifferentSourceIncomeRoute)
app.use('/api',DrinkingWaterRoute)
app.use('/api',SourceQualityWaterRoute)
app.use('/api',AgriImplementsRoute)
app.use('/api',HorticultureRoute)
app.use('/api',FodderFeedRoute)
app.use('/api',FodderFuelRoute)
app.use('/api',GrazeCattleCommunityRoute)
app.use('/api',HouseholdAssetsRoute)
app.use('/api',ParticipationCommunityProgramRoute)
app.use('/api',AwarenessAdoptionTechnologyRoute)
app.use('/api',MembershipRoute)
app.use('/api',AnySchemePreviousProjectRoute)
app.use('/api',AwareWatershedSoilLandStatusRoute)

app.use('/api',headerRoutes);
app.use('/api',householdRoutes);


const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:8100', 'http://192.168.1.111','http://183.82.109.39'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.get("/",(req,res) =>{
    res.send("api started")
})


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});