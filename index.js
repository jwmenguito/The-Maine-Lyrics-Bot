var express = require('express');
var app = express();
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
var controller = require('./src/config/controller.js');
var port = process.env.PORT || 3000;
app.listen(port);
console.log("App is running on port "+ port);
