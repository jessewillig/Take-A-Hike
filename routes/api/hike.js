const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Hike, Comment } = require("../../models");

// router.get()

router.post("/", withAuth, async (req, res) => {
    try {
        const newHike = await Hike.create({
            text: req.body.newComment,
            date: req.body.date,
            rating: req.body.newRating,
            author: req.session.user_id,
        });
        res.status(200).json(newHike);
    } catch (err) {
        res.status(500).json(err)
    }

});

router.get("/comment/:id", async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                },
            ],
        });
        const comment = commentData.get({ plain: true });

        res.render("review", {
            ...comment,
            logged_in: res.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;