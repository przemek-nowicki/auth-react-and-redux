const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const User = require('../../user/User');
const config = require('../application');

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: ['id', 'emails', 'name', 'displayName']
  },
  function(accessToken, refreshToken, profile, done) {
    const query = { facebookId : profile.id };
    const update = {
      email: profile.emails ? profile.emails[0].value : undefined,
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

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
