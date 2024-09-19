import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: [true, "first name is required"],
    },
    lastName: {
        type: String,
        required: [true, "last name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email should be unique"]
    },
    password: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    provider: {
        type: String,
        default: 'Credentials'
    },
    profileImg: {
        type: String,
        default: "https://i.imghippo.com/files/M1ozg1725980497.png"
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: String,

}, {timestamps: true})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User