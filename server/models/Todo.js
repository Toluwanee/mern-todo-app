// defining the schema for our To-Do items

import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    completed: {
        type: Boolean,
        default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;