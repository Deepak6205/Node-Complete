const express = require('express');
const app = express();
const db = require('./db');
const Task = require('./models/Task');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome Baby Lets start this shit...');
});

//import the router files
const personRoutes = require('./routes/personRoute');
const menuItemRoute = require('./routes/menuItemRoute');
// use the router files
app.use('/person',personRoutes);
app.use('/MenuItem',menuItemRoute);

app.listen(3000, () => {
    console.log('listening to the server');
});