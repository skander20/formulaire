const express =require("express");
const app =express();
const mysql=require("mysql");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});

//app.use(express.json());
app.use(express.static('../frontend'));


app.post('/contact',urlencodedParser, (req, res) => {
    console.log(req.body);
    res.status(200).send({status: 'received'});
});


module.exports = app;






