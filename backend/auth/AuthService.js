const jwt = require('jsonwebtoken');
const config = require('../config/application');
const passport = require('passport');

exports.issueToken = (userId) => {
    return jwt.sign({id: userId}, config.jwt.secret, {expiresIn: config.jwt.expiresIn});
}

exports.authRequired = (req, res, next) => {
    return passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err) {
            console.error(`JWT authentication error: `, err);
            return res.status(500).send({message: 'Failed to authenticate token.'});
        }
        if(info) { 
            console.error(`JWT authentication error: [user: ${user ? user.email : 'no-user-data'}; info: ${info}]`);
            return res.status(401).send({message: 'Unauthorized'});
        }
        if (!user) {
            console.error(`JWT authentication error: could not authenticate user.`)
            return res.status(500).send({message: 'Failed to authenticate user.'});
        }
        req.user = user;
        next();
    })(req, res, next);
}