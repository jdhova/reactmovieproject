const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors")
const bcrypt = require('bcrypt')
// import config from "../config.json"
var config = require('./config.json')


const app = express();

mongoose.connect('mongodb://localhost:27017/video')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("JudesAwesome"));
if(config.enviroment === "development"){
    app.use(express.static(path.join(__dirname, 'public')));
}
app.use(cors({
    origin: [`${config.backendUrl}`, `${config.backendUrl}`],
    credentials: true
}))  

app.use('/signin', require('./routes/signin.js'));
app.use('/signup', require('./routes/signup.js'))
app.use('/search', require('./routes/search.js'))
app.use('/comments', require('./routes/comments.js'))

//debugger
if(config.enviroment === "production") {
    app.use(express.static(path.join(__dirname, '/build')));
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/build', 'index.html'));
    })   
}


// MongoDB Connect

// app.listen(5000, () => {
//     console.log('Back end working port 5000')
// })


module.exports = app;
