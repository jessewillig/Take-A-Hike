import axios from "axios";
// const axios = require('axios');
const YELP_API_KEY = `Mw30ITWflSolse_YhQacZ7frFs0bKAwh-wteoRdVU4o3S9bfSkLyRsUsCToHzGSzZEvalTsvVasyid3MUq_HdOf3RGI-GUcamb557Pe7CGC5CsDVlmESpAApUgmiYHYx`

const yelpFetch = async (term, location) => {
  await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=hiking&term=${term}&location=${location}`,
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

const weatherbit = async (longitude, latitude) => {
  await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/current', {
    params: {lon: `${longitude}`, lat: `${latitude}`, units: 'imperial'},
    headers: {
      'x-rapidapi-key': process.env.WEATHERBIT_KEY,
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });
};

// Weatherbit fetch boilerplate

// const weather = {
//   method: 'GET',
//   url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
//   params: {lon: `${longitude}`, lat: `${latitude}`, units: 'imperial'},
//   headers: {
//     'x-rapidapi-key': process.env.WEATHERBIT_KEY,
//     'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
//   }
// };

// axios.request(weather).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//yelpFetch('trail', 'olympia');

const signup = (user) => axios.post("/api/users/", user);
const login = (user) => axios.post("/api/users/login", user);
const logout = () => axios.post("/api/users/logout");
const authenticatedUser = () => axios.get("/api/users/authenticatedUser");

export {
  weatherbit,
  yelpFetch,
  signup,
  login,
  logout,
  authenticatedUser
}