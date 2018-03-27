require("dotenv").config();

var keys = require("./keys.js");

//-----------------------------------TWITTER-----------------------------------
var Twitter = require('twitter');
var twitterKeys = keys.twitter;
var client = new Twitter({
    twitterKeys,
  });
  console.log(twitterKeys);

var params = {
screen_name: 'KerenShim',
count: 1
    };

function runTwitter () {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
        }
        else {
            console.log("ERROR");
        }
      });
    }
    
runTwitter();