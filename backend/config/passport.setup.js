const config = require('./application');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../user/User');

passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(`User logged in with googleId=${profile.id}`);
    const query = { googleId : profile.id };
    const update = {
      email: profile.emails ? profile.emails[0].value : undefined,
      name: profile.displayName,
      photoUrl : profile.photos ? profile.photos[0].value : undefined,
      lastLogin : {
        timestamp : new Date()
      }  
    }
    const options = { upsert : true, new : true };
    User.findOneAndUpdate(query, update, options, (err, user) => err ? done(err) : done(null, user));
  }
));