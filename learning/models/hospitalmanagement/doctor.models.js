import mongoose from "mongoose";

const doctorServeSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    hour: {
        type: Number
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    serveHospital: {
        type: [doctorServeSchema]
    }
}, {timestamps: true})

const Doctor = mongoose.model("Doctor", doctorSchema)