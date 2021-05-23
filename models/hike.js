const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Create Schema
const hikeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    image: {
        type:String
    },
    comments : [{
        type: Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
});

const Hike = mongoose.model('Hike', hikeSchema);
module.exports = Hike;