// MAKING UP CONNECTION TO OUR DATABASE VIA MONGOOSE 

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/E-Commerce_API");

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error in connecting to Database'));

db.once('open', function(){
    console.log('Successfully Connected to Database :: MongoDB');
});

module.exports = db;

