const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mean-crud-app';
mongoose.connect(MONGODB_URI);