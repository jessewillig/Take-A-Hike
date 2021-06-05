import axios from "axios";

const weatherbit = async (longitude, latitude) => {
  await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/current', {
    params: { lon: `${longitude}`, lat: `${latitude}`, units: 'imperial' },
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

const saveHike = (hikeData) => {
  console.log(hikeData)
  return axios.post("/api/hikes", hikeData);
}
const signup = (user) => axios.post("/api/users/", user);
const login = (user) => axios.post("/api/users/login", user);
const logout = () => axios.post("/api/users/logout");
const authenticatedUser = () => axios.get("/api/users/authenticatedUser");
const postComment = () => axios.post("/api/comments");

export {
  weatherbit,
  signup,
  login,
  logout,
  authenticatedUser,
  saveHike,
  postComment
}

