const express =require('express');
const app = express();

const { job } = require("./cron");
job.start();
// Checking the server
app.get("/", (req, res) => {
  res.send("process.env");
});

//Cors
const cors=require('cors');
app.use(cors());

require('dotenv').config();

// LOGGING ALL THE METHODS PERFORMED
const morgan=require('morgan');
app.use(morgan('common'));

//MIDDLEWARES for getting json data as request
const bodyparser=require('body-parser');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

// Route
const mailer = require('./routes/index');
app.use('/api',mailer);

// Listening the server
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log("An error occured while listening");
    }
    else{
        console.log(`Here I listened something at port ${process.env.PORT}`);
    }
})