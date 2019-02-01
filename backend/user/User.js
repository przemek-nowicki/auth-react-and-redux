const mongoose = require('mongoose');  
const bcrypt = require('bcryptjs');

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

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    name: this.name
  };
}

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');