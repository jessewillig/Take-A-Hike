const router = require("express").Router();
const Comment = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const userComment = await Comment.create({
            text: req.body.newComment,
            date: req.body.date,
            rating: req.body.newRating,
            // author: req.session.author,
        });
        res.status(200).json(userComment);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;