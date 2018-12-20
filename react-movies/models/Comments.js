

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CommentsSchema = new Schema({ 
    comment: String,
    username: String,
    filmid:String,
    UserID:String.
});

let Comments = mongoose.model('Comments', CommentsSchema)

module.exports = Comments;




