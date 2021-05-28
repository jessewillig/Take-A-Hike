const yelp = require('yelp-fusion');
const client = yelp.client(process.env.REACT_APP_YELP_API_KEY);

client.search({
  term: 'Four Barrel Coffee',
  location: 'hiking',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});