const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const Task = require('./models/Task');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


const passport = require('./auth');
// Middleware Function

const logRequest = (req,res,next) =>{
  console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
  next(); //move to the next phase
}

// for middleware
app.use(logRequest); 
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false})
app.get('/', function (req, res) {
  res.send('Welcome Baby Lets start this shit...');
});

//import the router files
const personRoutes = require('./routes/personRoute');
const menuItemRoute = require('./routes/menuItemRoute');
// use the router files
app.use('/person', personRoutes);
app.use('/MenuItem',menuItemRoute);



app.listen(PORT, () => {
    console.log('listening to the server');
});