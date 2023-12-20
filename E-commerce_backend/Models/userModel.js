const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
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

userSchema.pre('save', async function(){
    if(!this.isModified){
        next();
    }
    this.password = await bcryptjs.hash(this.password, 10);
});
module.exports = mongoose.model('User',userSchema)