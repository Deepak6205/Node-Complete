const mongoose = require('mongoose');

//define mongoDb URL

const mongoURL = 'mongodb://localhost:27017/hotels' //replace my database with your database name

//setup mongoDb Connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection
//mongoose maintains a default connection object representing the MongoDb connection.

const db = mongoose.connection;

// define event Listners for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.error('MongoDB connection error', err);
});

db.on('disconnected',()=>{
    console.log(' MongoDB server disconnected');
});

// Export the database connection

module.exports = db;