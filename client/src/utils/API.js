import axios from "axios";

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.REACT_APP_YELP_API_KEY);

client.search({
  term: 'hiking',
  location: 'snohomish',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});


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
const postComment = () => axios.post("/api/comments");

export {
  weatherbit,
  //yelpFetch,
  signup,
  login,
  logout,
  authenticatedUser,
  postComment
}

