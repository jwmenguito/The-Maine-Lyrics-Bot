var express = require('express');
var app = express();
var fs = require('fs');
var controller = require('./src/config/controller.js');
var port = process.env.port || 3000;
controller.onLogin;
app.listen(port);
console.log("App is running on port "+ port);
