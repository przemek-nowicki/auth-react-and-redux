const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('../user/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const config = require('../config/application');
const VerifyToken = require('./VerifyToken');
const AuthService = require('./AuthService');

router.post('/login', function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
});

router.post('/register', function(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    },
    function (err, user) {
        if (err) return res.status(500).send("There was a problem registering the user.")
        // create a token
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    }); 
});

router.get('/me', VerifyToken, function(req, res) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
 });

/*** Google OAuth routes ***/

router.get('/google', passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email']
}));

router.get(config.google.callbackURL.replace('/api/auth',''), 
           passport.authenticate('google',{session: false}), 
           function(req, res) {
    const token = AuthService.signToken(req.user._id);
    if(token) {
        console.log(`[GoogleOauth]: Token issued for the user: ${req.user._id}`);
    } else {
        console.error(`[GoogleOauth]: Token has not been issued for the user: ${req.user._id}`);
    }
    res.status(200).send({ token: token });
});

module.exports = router;