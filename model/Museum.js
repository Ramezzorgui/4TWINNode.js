const mongoose = require('mongoose');

const Museum = mongoose.Schema({
    Name:String,
    Location:String,
    Description:String,
    
    });
    
module.exports = mongoose.model("museum",Museum);