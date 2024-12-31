const mongoose = require("mongoose");

const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);