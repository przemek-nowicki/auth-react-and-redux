const express = require('express');
const mustacheExpress = require('mustache-express');
const cors = require('cors');
const passport = require('passport');

require('./db');
require('./config/passport/facebook.setup');
require('./config/passport/google.setup');
require('./config/passport/jwt.setup');
require('./config/passport/local.setup');

const app = express();

const UserController = require('./user/UserController');
const AuthController = require('./auth/AuthController');

app.engine('html', mustacheExpress());
app.use(passport.initialize());
app.use(cors());
app.use('/api/users', UserController);
app.use('/api/auth', AuthController);

module.exports = app;