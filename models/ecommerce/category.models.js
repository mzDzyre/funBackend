import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: truez
    }
}, { timestamps: true })
export const Category = mongoose.model("Category", categorySchema)