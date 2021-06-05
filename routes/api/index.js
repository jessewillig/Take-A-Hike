const router = require('express').Router();
const userRoutes = require('./user');
const commentRoutes = require("./comment");
const hikeRoutes = require("./hike");
const yelpRoutes = require('./yelp');

router.use('/users', userRoutes );
router.use('/comments', commentRoutes );
router.use('/hikes', hikeRoutes );
router.use('/yelp', yelpRoutes);

module.exports = router;