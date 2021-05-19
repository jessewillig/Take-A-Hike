// import axios from "axios";
const axios = require('axios');
// import { YELP_API_KEY } from "@env";
YELP_API_KEY = 'APIKEY'

// export default {

const yelpFetch = async (term, location) => {
await axios
    .get(
        `https://api.yelp.com/v3/businesses/search?categories=hiking&term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    )
    .then(response => {
        console.log(response.data.businesses[0]);
    })
    .catch(err => {
        console.log(err);
    });
};

yelpFetch('trails', 'seattle');