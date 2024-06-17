const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

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

  module.exports = router;
  
  
  