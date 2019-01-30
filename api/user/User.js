const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  photoUrl: String,
  lastLogin: {
    timestamp : { type : Date, default : undefined }
  },
  googleId: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');