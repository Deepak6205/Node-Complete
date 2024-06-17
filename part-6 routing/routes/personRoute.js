const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post('/', async(req,res) =>{
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

  router.get('/:workType', async(req,res)=>{
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
  