const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Create Schema
const hikeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type:String
    }  
});

const Hike = mongoose.model('Hike', hikeSchema);
module.exports = Hike;