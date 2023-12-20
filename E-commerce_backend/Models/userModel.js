const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter your name"]
    },
    email : { type: String,
            required :[true, "Please enter your email address"],
            unique: true
        },

    password: {
        type: String,
        minLength: [4, "Password must be at least 4 characters"],
        select: false,
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please enter a valid phone number"],
    },
    role: {
        type: String,
        default: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    resetPasswordTokken: String,
    resetPasswordTime: Date



});
module.exports = mongoose.models('User', userSchema);