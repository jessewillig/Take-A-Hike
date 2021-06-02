const router = require('express').Router();
const bcrypt = require("bcrypt");
const axios = require('axios');

const token = process.env.TOKEN;
const config = {
    headers: { Authorization: `Bearer ${token}` },
};

router.post('/', async (req, res) => {
    const location = req.body.location;
    console.log(req.body.location);
    axios.get(`https://api.yelp.com/v3/businesses/search?categories=hiking&term=hiking&location=${location}`, config)
    .then((data) => {
        console.log(data);
        res.send(data.data.businesses)
    })
    .catch(console.log)
});

module.exports = router;