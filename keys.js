//--------------------------------------------APIS-----------------------------------------------
// 1. [Twitter](https://www.npmjs.com/package/twitter)
// 2. [Spotify](https://www.npmjs.com/package/node-spotify-api)
// 3. [Request](https://www.npmjs.com/package/request) <this API allows to grab data from OMDB API>
// 4. [OMDB API](http://www.omdbapi.com)
// 5. [DotEnv](https://www.npmjs.com/package/dotenv)
//------------------------------------------------------------------------------------------------

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
