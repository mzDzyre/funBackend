import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"]
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B-", "B+", "AB-", "AB+", "O+", "O-"]
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    }
}, {timestamps: true})

const Patient = mongoose.model("Patient", patientSchema)