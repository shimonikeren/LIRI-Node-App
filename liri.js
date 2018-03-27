//--------------------------------User Commands-----------------------------------
var userCommand = process.argv[2];
var spotifySong = process.argv[3];


//--------------------------------Requires----------------------------------------
require("dotenv").config();
var keys = require("./keys.js"); 
var Twitter = require('twitter'); 
var Spotify = require('node-spotify-api');
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
            console.log("---------------------------------");
            }
        }
        else {
          console.log(error);
        }
      });
}

//---------------------------------Spotify Setup ----------------------------------
var spotifyKeys = keys.spotify;

var spotify = new Spotify(
    spotifyKeys
);

//----------------------------Spotify API Call Function----------------------------
function runSpotify(){
    spotify.search({ type: 'track', query: spotifySong }, function(err, data) {
        if (!err){
            var songData=data.tracks.items;
            for (var i=0; i<10; i++){
                if (songData[i] != undefined){
                    console.log("Artist: " + songData[i].artists[0].name);
                    console.log("Song: " + songData[i].name);
                    console.log("Album: " + songData[i].album.name);
                    console.log("URL: " + songData[i].preview_url);
                    console.log("---------------------------------");
                }
            }
        }
        else {
        return console.log('Error occurred: ' + err);
        }
    });
}
//------------------------------------OMDB Setup ----------------------------------
//------------------------------OMDB API Call Function-----------------------------


//------------------------Call functions based on User Command---------------------
switch (userCommand) {
    case 'my-tweets':
    runTwitter();
    break;

      case `spotify-this-song`:
      runSpotify();
      break;

      case `movie-this`:
      console.log("NOT created yet");
      break;
    
      case `do-what-it-says`:
      console.log("NOT created yet");
      break;
    
      case 'dinosaur':
      default:
      console.log("NOT A VALID COMMAND");
}