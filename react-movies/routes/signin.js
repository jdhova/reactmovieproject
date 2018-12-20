var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

 // var router = express()
  router.use(cookieParser())
  
  const Schema = mongoose.Schema;

  const Users = mongoose.model('users', new Schema({ 

    username: String,
    password: String,
  }));




  router.post ("/", (req ,res) => {
     debugger
  
    const password = req.body.data.password
    const username = req.body.data.username
    console.log(req.body.data.username)
    Users.find({username: req.body.data.username}, (err, result) => {
      
        debugger
        if (err) {
            res.status(500).end()
            console.log('errir is')
        }
        else if (result.length === 0) {
            res.status(403).end()
        }
         else{  
             
            bcrypt.compare(req.body.data.password, result[0].password , function(err, match) {
                
                if (match) {
                    debugger
                    res.cookie("loggedIn", "true", {signed: true})
                    res.cookie('userId', result[0]._id, {signed: true}) // options is optional
                    res.status(200).send({user:result})
                    console.log("yes im in")
                    }
                    else{
                        console.log(err)
                         debugger
                        // debugger
                        res.status(403).end()
                    }
            })
        }
    }) 
})



module.exports = router;

