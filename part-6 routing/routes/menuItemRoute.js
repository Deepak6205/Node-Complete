const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
const { findByIdAndUpdate } = require('../models/person');
const { json } = require('body-parser');

router.post('/',async(req,res)=>{
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

  // assignment 2 :- update the menu item record(menu/:id)

  router.put('/:id', async(req,res)=>{
    try{
      const menuId = req.params.id;
      const updateMenuData = req.body;
      const response = await MenuItem.findByIdAndUpdate(menuId,updateMenuData,{
        new :true,
        runValidators : true,
      });
      if(!response){
        return res.status(404).json({error:'menu not found'});
      }
      console.log('here is your menu!!!');
      res.status(200).json(response);
    }catch(error){
      console.log(err);
      res.status(500).json({error: 'Internal server fatt gaya'});
    }
  })

router.get('/',async(req,res)=>{
    try{
      const menuData = await MenuItem.find();
      console.log("here you have the menuData");
      res.status(200).json(menuData)
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'got the internal servar'});
    }
  })

  // assignment 1 :- creating parameterize get method on the basis of taste.(menu/:taste)

  

  router.get('/:taste', async(req,res)=>{
    try{
      const tasteType = req.params.taste;
      if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy'){
        const response = await MenuItem.find({taste:tasteType});
        console.log('delecious!!');
        res.status(200).json(response);
      }else{
        res.status(404),json({error: 'Invalid taste type'});
      }
    }catch(error){
      console.log(error);
      res.status(500).json({error: 'where is the food nigga!!!'});
    }
  })

  // assignment 3 :- creating parameterize delete method on the basis of id.(menu/:id)

  router.delete('/:id', async(req,res)=>{
    try{
      const menuId = req.params.id;
      const response = await MenuItem.findByIdAndDelete(menuId);
      if(!response){
        return res.status(404).json({error: 'where is the menu Nigga!!'});
      }
      console.log("testy testy dish deleted");
      res.status(200).json({message: 'sorry this is menu is no more available'});
    }catch(error){
      console.log(error);
      res.status(500).json({error: 'what should i delete there is no such menu'});
    }
  })

  module.exports = router;
  
  
  