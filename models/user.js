const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })


const User = mongoose.model('user', userSchema);
module.exports = {
    User,
}

// Now for we need to authentication --> means the user needs to login (Note that here we aren''y using cookies so the server might forget who we are?? and the problem we will be solving in the next video.) 
//we need to a diffeerent route so let's go and create user.js in the routes folder.