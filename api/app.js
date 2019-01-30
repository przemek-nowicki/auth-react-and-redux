const express = require('express');
const cors = require('cors');
const passport = require('passport');

require('./db');
require('./config/passport.setup');

const app = express();

const UserController = require('./user/UserController');
const AuthController = require('./auth/AuthController');

app.use(passport.initialize());
app.use(cors());
app.use('/api/users', UserController);
app.use('/api/auth', AuthController);

module.exports = app;