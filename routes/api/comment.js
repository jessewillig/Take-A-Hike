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

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                author: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: "No comment found with this id!" });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;