const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const tweetSchema = mongoose.Schema({
    username: {
        type: String
    },
    
    content: {
        type: String,
        default: ''
    },

    childType: {
        type: String,
        default: null
    }
});

tweetSchema.plugin(timestamps);
module.exports = mongoose.model('tweets', tweetSchema);
