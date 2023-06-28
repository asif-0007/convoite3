const mongoose = require('mongoose');
const db_url = require('../secret');
require('dotenv').config();

mongoose.connect(db_url, ()=> {
  console.log('connected to mongodb')
})
