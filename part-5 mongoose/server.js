const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person');
const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome Baby Lets start this shit...');
});

app.post('/person', async(req,res) =>{
  try{
    const data = req.body // Assuming the request body contains the person data

  // Create a new person document using the mongoose model
  const newPerson = new  person(data);

  // save a new person to the data base
  const response = await newPerson.save();
  console.log('data saved');
  res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server error'});
  }
})
//GET method
app.get('/person', async(req,res)=>{
  try{
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server error'});
  }
})

app.listen(3000, () => {
    console.log('listening to the server');
});