const mongoose = require('mongoose');


const PRODUCT = mongoose.Schema({
    Name:String,
    Price:Number,
    Category:String,
    
    });
    
    module.exports = mongoose.model("product",PRODUCT);