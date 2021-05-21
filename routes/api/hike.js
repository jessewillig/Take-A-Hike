const router = require("express").Router();
const Hike = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const newHike = await Hike.create({
            text: req.body.newComment,
            date: req.body.date,
            rating: req.body.newRating,
            author: req.session.user_id,
        });
        res.status(200).json(userComment);
    } catch (err) {
        res.status(500).json(err)
    }

});

module.exports = router;