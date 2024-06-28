const express = require('express');
const router = express.Router();
const person = require('./../models/person');
const {jwtAuthMiddleware,generateToken} = require('./../jwt');
//
router.post('/signup', async(req,res) =>{
  try{
    const data = req.body // Assuming the request body contains the person signup data

  // Create a new person singnup document using the mongoose model
  const newPerson = new  person(data);

  // save a new person signup to the data base
  const response = await newPerson.save();
  console.log('data saved');
  
  const payload = {
    id: response.id,
    username: response.username
  }
  console.log(JSON.stringify(payload));
  const token = generateToken(response.username);
  console.log("Token is : ",token);
  res.status(200).json({response:response, token:token})

  res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server error'});
  }
})

// Login Route
router.post('/login',async(req,res) =>{
  try{
    //Extract username and password from request body
    const {username,password} = req.body;

    // find the user by userName
    const user = await person.findOne({username: username});

    // If user does not exist or password does not match. return error
    if(!user || !(await user.comparePassword(password))){
      return res.status(401).json({error: 'Invalid username or password'});
    }

    // generate token
    const payload = {
      id: user.id,
      username: user.username
    }
    const token = generateToken(payload);

    // return token as response
    res.json({token});

  }catch(err){
    console.error(err);
    res.status(500).json({error: 'Internal Server Error !!!'});
  }
});

//profile rourte
router.get('/profile',jwtAuthMiddleware,async (req,res) => {
  try{
    const userData = req.user;
    console.log("User Data: ", userData);

    const userId = userData.id;
    const user = await person.findById(userId);
    res.status(200).json({user});
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'Internal Server Error !!!'});
  }
})


router.post('/',jwtAuthMiddleware, async(req,res) =>{
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

    router.get('/', async(req,res)=>{
        try{
            const data = req.body;
            const newPerson = new person(data);
            const response = await newPerson.save();
            console.log("data Saved");
            res.status(200).json(response);
        }catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal server Error'});
        }
    });

  //GET method with validation

  router.get('/:workType',jwtAuthMiddleware, async(req,res)=>{
    try{
      const workType = req.params.workType; // Extract the work from the URL parameter
      if(workType == 'chef' ||workType == 'manager' ||workType == 'waiter'){
        const response = await person.find({work:workType});
        console.log("response fetched");
        res.status(200).json(response);
      }else{
        res.status(404).json({error: 'Internal Server Error'});
      }
  
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server Error'});
    }
  })


  // UPDATE


  router.put('/:id', async(req,res) => {
    try{
      const personId = req.params.id; // Extract the id from the URL parameter
      const updatedPersonData = req.body; // updated data for person

      const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true, // Return the updated Document
        runValidators:true, // Run Mongoose validation
      })
      if(!response){
        return res.status(404).json({error:'Person not found'});
      }
      console.log('data updated');
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server fatt gaya'});
    }
  })

  //Delete

  router.delete('/:id',async(req,res)=>{
    try{
      const personId = req.params.id;
      const response = await person.findByIdAndDelete(personId);
      if(!response){
        return res.status(404).json({error: 'where is the person Nigga!!'});
      }
      console.log('now you have fucked the person');
      res.status(200).json({message: 'get the fuck out of here Nigga!!'});
    }catch(error){
      console.log(error);
      res.status(500).json({error: 'Internal server Mar gaya !!'});
    }
  })

  module.exports = router;
  