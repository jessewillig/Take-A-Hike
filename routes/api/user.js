const router = require("express").Router();
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
            res.status(200).json( { 
                user_id: userData._id,
                username: userData.username
            });
        })
        

    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.post('/login', async(req,res) => { 
    try {
        const userData = await db.User.findOne({ email: req.body.email });

        if (!userData) { 
            res
                .status(400)
                .json({ message: "Incorrect eamil or password, please try again."});
                return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );
        
        if (!validPassword) { 
            res
            .status(400)
            .json({ message: "Incorrect email or password, please try again. " });
            return;
        }

        req.session.save(() => { 
            req.sesssion.user_id = userData._id;
            req.session.logged_in = true;

            res.json({ user: {username: userData.username, user_id: userData._id}, message: "You are no loggedin!" })
        })

    } catch (err) {
        
    }
});

router.post('/logout', (req, res) => { 
    if(req.sessioin.logged_in) { 
        req.session.destroy(() => { 
            res.status(204).end();
        }); 
    } else { 
        res.statue(404).end();
    }
});

module.exports = router;