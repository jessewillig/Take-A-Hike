// import axios from "axios";
const axios = require('axios');
// import { YELP_API_KEY } from "@env";
YELP_API_KEY = `INSERT API KEY FROM ENV HERE`

// export default {
//   searchTerms: function (term, location) {
//     return axios.get(
//       `https://api.yelp.com/v3/businesses/search?categories=hiking&location=${location}&term=${term}`,
//       {
//         headers: {
//           Authorization: `Bearer ${YELP_API_KEY}`,
//         },
//       }
//     );
//   },
// };

// searchTest(axios.get(
//     `https://api.yelp.com/v3/businesses/search?categories=hiking&location=snohomish&term=trail`,
//     {
//       headers: {
//         Authorization: `Bearer ${YELP_API_KEY}`,
//       },
//     }
//   ).then(function (response) {
//       console.log(response.data)
//   })
// );
// searchTest();

const yelpFetch = async () => {
    const data = await axios
    .get(
        `https://api.yelp.com/v3/businesses/search?categories=hiking&location=snohomish&term=trail`,
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

yelpFetch();