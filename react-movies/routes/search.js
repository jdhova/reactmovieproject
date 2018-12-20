var express = require('express');
var router = express.Router();
var Movie = require('../models/Movies')

router.get('/', (req, res, next) => {
    debugger
    console.log("working")
    
    Movie.find(( { year: { $gt: 1000} } ), function (err, result ) {
        if(err) console.log(err)
        debugger
        res.json({movies : result} )
    }) 
    debugger
});

module.exports = router;
