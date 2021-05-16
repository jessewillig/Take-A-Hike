const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");

router.post('/', async (req, res) => {
    try {

        
        const userData = await db.User.create(req.body);

        res.status(200).json(userData);

    } catch (err) {
        console.error(err);
    }
})
