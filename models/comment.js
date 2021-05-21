const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//Create Schema
const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    rating: {
        type: Number,
        required: false
    },
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;