const mongoose = require('mongoose');

const Book = mongoose.Schema({
    Title:String,
    Author:String,
    publicationYear:Number,
    Genre:String,
    Available:Boolean,
    });
    
module.exports = mongoose.model("book",Book);