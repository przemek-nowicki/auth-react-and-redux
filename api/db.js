const mongoose = require('mongoose');
const config = require('./config/application');

mongoose.connect(config.mongodb.URI)
    .then(() => {  console.log(`Successfully connected to the Mongodb Database`) })
    .catch((e) => { console.log(`Error Connecting to the Mongodb Database [error: ${e.message}]`)});