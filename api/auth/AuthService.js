const jwt = require('jsonwebtoken');
const config = require('../config/application');
const passport = require('passport');

// Issue Token
exports.signToken = (userId) => {
    return jwt.sign({id: userId}, config.jwt.secret, {expiresIn: config.jwt.expiresIn});
}

exports.verifyToken = () => {
    return passport.authenticate('jwt', {session: false});
}