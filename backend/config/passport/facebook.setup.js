const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const User = require('../../user/User');
const config = require('../application');

passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: ['id', 'emails', 'name', 'displayName', 'photos']
  },
  function(accessToken, refreshToken, profile, done) {
    const email = profile.emails ? profile.emails[0].value : undefined;
    const query = {  $or: [{facebookId : profile.id}, {email}] };
    const fieldsToUpdate = {
      photoUrl : profile.photos ? profile.photos[0].value : undefined,
      facebookId: profile.id,
      lastLogin : new Date()
    }
    User.update(
      query,
      {
        $set: fieldsToUpdate,
        $setOnInsert: {
          email,
          name: profile.displayName,
          createdAt: new Date()
        },
      },
      {upsert: true, omitUndefined: true},
      (err, res) => { 
        if(err) {
          done(err);
        }
        console.info(`[FacebookOAuth]: User with ${fieldsToUpdate.facebookId} facebookId connected`);
        User.findOne({facebookId: fieldsToUpdate.facebookId}, (err, user) => {
          if(err) {
            done(err);
          }
          done(null, user.toAuthJSON());
        });
      }
   );
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
