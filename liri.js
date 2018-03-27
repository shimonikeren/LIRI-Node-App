require("dotenv").config();

var keys = require("./keys.js"); //access keys from keys.js file 

//--------------------------------Twitter Setup ----------------------------------
var Twitter = require('twitter'); 
var twitterKeys = keys.twitter;
var client = new Twitter({
    twitterKeys
  });

var params = {
    // q: '#nodejs, #Nodejs',  //not sure whether this is necessary 
    screen_name: 'KerenShim',
    count: 20,
    };

//----------------------------Twitter API Call Function----------------------------

function runTwitter () {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        for (var i = 0; i<tweets.length; i++){
            console.log(tweets[i]);
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
            }
        }
        else {
          console.log("ERROR!!" + error);
        }
      });
}
//-----------------------------------Call Twitter Function -------------------------
runTwitter();