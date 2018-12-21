var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require("cors")
const bcrypt = require('bcrypt')

// app.use(cors({
//   origin: 'http://localhost:3000/',
//   credentials: true
// }))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
const User = require("../models/Users");





router.post("/", (req, res) => {
  console.log(req.body)

  debugger

  bcrypt.hash(req.body.password, 5, (err, hash) => {
    debugger
      if (err) console.log('its a hash errooooor',err) 
      User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          password: hash
      })
      .then((result) =>{
        debugger
        console.log(result)
        res.send(result)
      })
      .catch((err)=>{
        debugger
        console.log('its a catch',err)
      })

  })

})


module.exports = router;
