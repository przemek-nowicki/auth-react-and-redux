const mongoose = require('mongoose');  
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new mongoose.Schema({  
  name: {type: String, required: [true, 'name is required'], trim: true},
  email: {type: String,
    trim: true,
    unique: true,
    required: [true, 'email is required'],
    validate: [validateEmail, 'invalid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid email address']},
  hash: String,
  salt: String,
  photoUrl: String,
  lastLogin: { type : Date, default : undefined },
  createdAt:  { type : Date, default : undefined },
  googleId: String,
  facebookId: String
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} already exists!' });

UserSchema.methods.validPassword = function(password) {
  bcrypt.hashSync(password, this.salt);
  return bcrypt.compareSync(password, this.hash);
};

UserSchema.methods.setPassword = function(password){
  this.salt = bcrypt.genSaltSync(10);
  this.hash = bcrypt.hashSync(password, this.salt);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    name: this.name
  };
};

UserSchema.methods.toProfileJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    name: this.name
  };
};

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');