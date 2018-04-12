const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const tweetSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    
    content: {
        type: String,
        required: true
    },

    childType: {
        type: String,
        default: null
    },

    parent: this,

    media: [{
        id: String
    }]
});

tweetSchema.plugin(timestamps);
module.exports = mongoose.model('tweets', tweetSchema);
