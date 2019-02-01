const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../user/User');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, done) {
        return User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err, false, {message:'Error on the server.'}); }
            if (!user) { return done(null, false, {message:'No user found'}); }
            if (!user.validPassword(password)) { return done(null, false, {message:'Incorrect password'}); }
            return done(null, user.toAuthJSON(), {message:'Logged In Successfully'});
        });
    }
));