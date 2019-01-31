const jwt = require('jsonwebtoken');
const config = require('../config/application');
const passport = require('passport');

exports.issueToken = (userId) => {
    return jwt.sign({id: userId}, config.jwt.secret, {expiresIn: config.jwt.expiresIn});
}

// TODO: will be used as soon as JWT strategy will be introduced to the project
exports.verifyToken = () => {
    return passport.authenticate('jwt', {session: false});
}