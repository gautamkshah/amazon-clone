const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app= express();
const port=8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');


mongoose.connect("mongodb+srv://gautam2002gkp:gautam@cluster0.1dbqufv.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);

