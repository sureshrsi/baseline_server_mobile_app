const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const itemRoutes = require('./src/routers/aadharSearch.router');
const sequelize = require('./src/config/database');

const IncomeKharifRoute = require('./src/routers/incomecropsKharif.route')
const IncomeRabhifRoute = require('./src/routers/incomecropsRabhi.route')
const LiveStockRoute = require('./src/routers/liveStock.route')
const headerRoutes = require('./src/routers/headerInformation.route')
const mitrateRoute = require('./src/routers/migrate.route')
const landlessRoute = require('./src/routers/landless.route')
const GovtBenefitRoute = require('./src/routers/govtbenefit.route')
const ManureChemicalRoute = require('./src/routers/manure_chemical.route')

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/items', itemRoutes);
app.use('/api',IncomeKharifRoute)
app.use('/api',IncomeRabhifRoute)
app.use('/api',LiveStockRoute)
app.use('/api',headerRoutes)
app.use('/api',mitrateRoute)
app.use('/api',landlessRoute)
app.use('/api',GovtBenefitRoute)
app.use('/api',ManureChemicalRoute)

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