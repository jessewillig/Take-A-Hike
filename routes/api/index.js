const router = require('express').Router();
const userRoutes = require('./user');
const commentRoutes = require("./comment");
const hikeRoutes = require("./hike");

router.use('/users', userRoutes );
router.use('/comments', commentRoutes );
router.use('/hikes', hikeRoutes );

module.exports = router;