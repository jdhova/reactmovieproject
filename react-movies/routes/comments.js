
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require("cors");
const Movie = require("../models/Movies.js");
const Users = require("../models/Users");





router.post ("/", (req ,res) => {
    console.log(req.body) //comment and film id
    console.log(req.signedCookies) //userId
    
    debugger;
    Users.findById({_id:req.signedCookies.userId}).then(user=>{
      let comment = {
        author:user.username,
        comment:req.body.comment
      }
      debugger
      Movie.findOneAndUpdate( {_id:req.body.filmId},{$push: {comments: comment},}, {new: true} ).then(result =>{
        res.send({result})
        console.log(result)  
        debugger
      })
    }).catch(err =>{
      debugger
      throw err;
    })
     
   
})



module.exports = router;