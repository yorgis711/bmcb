const express = require('express')
const app = express()
const port = 3000

var request = require('request');
app.get('/', function(req, res) {
   // request('https://mb.yorgis.net', function(error, response, body) {
      //  console.log(body)
      res.send("Hello World");
    });

function myFunction(p1, p2) {
 app.listen(port, () => {

}) 
}
// Your OAuth2 callback endpoint
app.get('/oauth/callback', async (req, res) => {
  const code = req.query.code; // The authorization code returned by Discord
  const options = {
    method: 'POST',
    url: 'https://discord.com/api/oauth2/token',
    params: {
      'client_id': DISCORD_CLIENT_ID,
      'client_secret': DISCORD_CLIENT_SECRET,
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': REDIRECT_URI,
     // The same redirect URI specified in your OAuth2 settings
      'scope': 'identify' // The same scope you used when generating your bot's invite link
    }
  };
  // Use an HTTP library to send a POST request to the Discord token API
  // to exchange the authorization code for an access token
  const response = await axios(options); // Note: you will need to install and import the "axios" library
  const accessToken = response.data.access_token;
  
  // Use the access token to query the Discord API or other resources, such as joining a server 
  
  // Finally, return a response indicating that the OAuth2 flow has completed successfully
  res.send('OAuth2 flow complete!');
});


module.exports = myFunction