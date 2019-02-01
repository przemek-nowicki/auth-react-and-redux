const passport = require('passport');
const config = require('../application');
const passportJWT = require("passport-jwt");
const User = require('../../user/User');

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : config.jwt.secret
    },
    function (jwtPayload, done) {
        User.findById(jwtPayload.id, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }
));