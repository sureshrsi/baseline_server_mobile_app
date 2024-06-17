const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const itemRoutes = require('./src/routers/aadharSearch.router');
const sequelize = require('./src/config/database');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/items', itemRoutes);

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