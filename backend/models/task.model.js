import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    completed:{
        type:Boolean,
        required: true
    }
}, {
    timestamps:true
})

const Task = mongoose.model("Task", taskSchema);

export default Task;

// Once I get things up and running I will add the following
// body & maybe a due date. the due date will be typed in
