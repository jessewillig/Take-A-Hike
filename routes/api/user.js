const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");
const bcrypt = require("bcrypt");

router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        //hash password
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await db.User.create(newUser);

        req.session.save(()=> { 
            req.session.user_id = userData._id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        })
        

    } catch (err) {
        console.error(err);
    }
})
