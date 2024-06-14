const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person');
const MenuItem = require('./models/MenuItem');
const Task = require('./models/Task');
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


//_______________ assignments _________________//

// Q1:-- create a POST MEthod API

app.post('/MenuItem',async(req,res)=>{
  try{
    const MenuItemdata = req.body;
    const newMenu = new MenuItem(MenuItemdata);
    const response = await newMenu.save();
    console.log("new menu saved");
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server error'});
  }
})

//Q2:---get the menu items

app.get('/MenuItem',async(req,res)=>{
  try{
    const menuData = await MenuItem.find();
    console.log("here you have the menuData");
    res.status(200).json(menuData)
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'got the internal servar'});
  }
})

// Q3:---create a POST Api with Express and Mongoose

app.post('/Task',async(req,res)=>{
  try{
    const taskData = req.body;
    const newTaskData = new Task(taskData); 
    const response = await newTaskData.save();
    console.log("now we fetched the data");
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'something blunder you have made'});
  }
})

// Q4:-- creating a get api for task

app.get('/Task', async(req,res)=>{
  try{
    const taskData = await Task.find();
    console.log("this is the tasks assigned to you");
    res.status(200).json(taskData);
  }catch(err){
    console.log(err);
      res.status(500).json({error: 'something wrong !!!!!!!!!!!!!!'})
    
  }
})

app.listen(3000, () => {
    console.log('listening to the server');
});