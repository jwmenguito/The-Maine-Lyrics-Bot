var botz = require('../models/bot');
var bot = botz.self;
const fs = require('fs');

//load songs
const song  = fs.readFileSync(__dirname+'/../res/song.txt','utf8');
const songs = song.split("***");

//randomize
const size = songs.length;
var randomize = function(){
    return songs[Math.floor(Math.random()*size-1)]; //returns lyrics
}
var onLogin = function(){

  bot.get('account/verify_credentials', {
          include_entities: false,
          skip_status: true,
          include_email: false
      }, onAuthenticated);
  function onAuthenticated(err, res) {
          if (err) {
              throw err
          }

          console.log('Authentication successful. Running bot...\r\n')
  }
}
var tweet = function(){
    var lyrics = randomize();
    bot.post('statuses/update',{status:lyrics},function(err,data,response){
      if (err) {
          throw err
      }
      console.log(data)
    });

    console.log(lyrics);
}

exports.onLogin = onLogin;
exports.tweet = tweet;
