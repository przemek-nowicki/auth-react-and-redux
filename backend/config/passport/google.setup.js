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
    const fieldsToupdate = {
      photoUrl : profile.photos ? profile.photos[0].value : undefined,
      googleId: profile.id,
      lastLogin : new Date()
    }
    User.update(
      query,
      {
        $set: fieldsToupdate,
        $setOnInsert: {
          email,
          displayName: profile.displayName,
          createdAt: new Date()
        },
      },
      {upsert: true, omitUndefined: true},
      (err, res) => { 
        if(err) {
          done(err);
        }
        console.info(`[GoogleOAuth]: User with ${fieldsToupdate.googleId} googleId connected`);
        User.findOne({googleId: fieldsToupdate.googleId}, (err, user) => {
          if(err) {
            done(err);
          }
          done(null, user.toAuthJSON());
        });
      }
   );
  }
));