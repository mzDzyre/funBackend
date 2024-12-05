import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        unique: true,
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTodo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
    }]
}, { timstamps: true });

export const Todo = mongoose.model("Todo", todoSchema);