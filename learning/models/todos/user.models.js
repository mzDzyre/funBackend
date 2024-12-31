import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: [6, "Password atleast of 8 characters"]
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

