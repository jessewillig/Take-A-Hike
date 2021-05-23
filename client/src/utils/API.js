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

//yelpFetch('trail', 'olympia');

const signup = (user) => axios.post("/api/users/", user);
const login = (user) => axios.post("/api/users/login", user);
const logout = () => axios.post("/api/users/logout");
const authenticatedUser = () => axios.get("/api/users/authenticatedUser");

export {
  yelpFetch,
  signup,
  login,
  logout,
  authenticatedUser
}