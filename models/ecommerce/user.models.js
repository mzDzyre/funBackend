import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: [8, "Please Enter Password atleast of 8 Characters"],
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true })

export const User = new mongoose.model("User", userSchema);