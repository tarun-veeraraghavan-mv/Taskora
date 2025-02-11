import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "A todo must have a course id"],
  },
  name: {
    type: String,
    required: [true, "A todo must have a name"],
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
