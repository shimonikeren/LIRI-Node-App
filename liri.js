//-------------------------------User Commands-----------------------------------
var userCommand = process.argv[2];

//-------------------------------Requires----------------------------------------
require("dotenv").config();
var keys = require("./keys.js"); //access keys from keys.js file 
var Twitter = require('twitter'); 
//--------------------------------Twitter Setup ----------------------------------
var twitterKeys = keys.twitter;
var client = new Twitter(
    twitterKeys
  );

var params = {
    screen_name: 'KerenShim',
    count: 20,
    };

//----------------------------Twitter API Call Function----------------------------
function runTwitter () {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        for (var i = 0; i<tweets.length; i++){
            console.log("Tweet Body: " + tweets[i].text);
            console.log("Date and Time of Tweet: " + tweets[i].created_at);
            }
        }
        else {
          console.log(error);
        }
      });
}

//---------------------------------Spotify Setup ----------------------------------
//----------------------------Spotify API Call Function----------------------------

//------------------------------------OMDB Setup ----------------------------------
//------------------------------OMDB API Call Function-----------------------------


//------------------------Call functions based on User Command---------------------

if (userCommand === 'my-tweets'){
    runTwitter();
}
else if (userCommand === `spotify-this-song`){
    console.log("NOT created yet");
}
else if (userCommand === `movie-this`){
    console.log("NOT created yet");
}
else if (userCommand === `do-what-it-says`){
    console.log("NOT created yet");
}
else {
    console.log("NOT A VALID COMMAND");
}