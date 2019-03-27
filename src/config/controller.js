var service = require('./services/songServices.js');
var scheduler = require('node-schedule');
var tweet = scheduler.scheduleJob('30 * * * *', service.tweet());
var onLogin = service.onLogin();
exports.onLogin = onLogin;
exports.tweet = tweet;
