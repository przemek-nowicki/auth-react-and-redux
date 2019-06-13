const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const config = require('../application');
const User = require('../../user/User');

passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    const email = profile.emails ? profile.emails[0].value : undefined;
    const query = { $or: [ {googleId : profile.id}, {email} ]};
    const update = {
      email,
      name: profile.displayName,
      photoUrl : profile.photos ? profile.photos[0].value : undefined,
      lastLogin : {
        timestamp : new Date()
      }  
    }
    const options = { upsert : true, new : true };
    User.findOneAndUpdate(query, update, options, (err, user) => err ? done(err) : done(null, user.toAuthJSON()));
  }
));