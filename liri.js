//-----------------------------------User Commands--------------------------------
var userCommand = process.argv[2];
var nodeArgs = process.argv;
var spotifySong = "";
    for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        spotifySong = spotifySong + " " + nodeArgs[i];
    }
    else {
        spotifySong += nodeArgs[i];
    }
    }

var movieName = "";
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
    }
    else {
    movieName += nodeArgs[i];
    }
}
//------------------------------------Requires------------------------------------
require("dotenv").config();
var keys = require("./keys.js"); 
var Twitter = require('twitter'); 
var Spotify = require('node-spotify-api');
var request = require("request");

//----------------------Call functions based on User Command----------------------
switch (userCommand) {
    case 'my-tweets':
    runTwitter();
    break;

    case `spotify-this-song`:
    runSpotify();
    break;

    case `movie-this`:
    runOMDB();
    break;

    case `do-what-it-says`:
    console.log("NOT created yet");
    break;

    case 'dinosaur':
    default:
    console.log("--------------------------------------------------------");
    console.log("NOT A VALID COMMAND. Please use of the following Commands: \n my-tweets, \n spotify-this-song <song name>, \n movie-this <movie name>, \n do-what-it-says");
    console.log("--------------------------------------------------------");
}

//----------------------------------Twitter API ----------------------------------
var twitterKeys = keys.twitter;
var client = new Twitter(
    twitterKeys
  );

var params = {
    screen_name: 'KerenShim',
    count: 20,
    };

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

//-----------------------------------Spotify API ----------------------------------
var spotifyKeys = keys.spotify;

var spotify = new Spotify(
    spotifyKeys
);

function runSpotify(){
    if (!spotifySong){
        spotifySong="I saw the sign";
    }
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
//------------------------------------OMDB API ------------------------------------
function runOMDB(){
    if (!movieName){
        movieName="Mr. Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotton Tomatos Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Country Produced In: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("---------------------------------");
    }
    else {
        console.log(error);
    }
    });
}

//------------------------------Do What It Says Function---------------------------


