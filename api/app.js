const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();
const UserController = require('./user/UserController');
const AuthController = require('./auth/AuthController');

app.use(cors());
app.use('/api/users', UserController);
app.use('/api/auth', AuthController);

module.exports = app;