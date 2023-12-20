const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../Models/userModel');
const ErrorHandler = require('../utils/ErrorHandler');
exports.register = catchAsyncErrors(async(req,res,next) => {
    const {email} = req.body;
    console.log(email);
    const userMail = await User.findOne({email})
    if(userMail){
        return next(new ErrorHandler("User Already Exists", 400))
    }
    const user = await User.create(req.body)
    res.status(201).json({success: true, user})
});

