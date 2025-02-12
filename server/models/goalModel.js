import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A goal must have a name"],
  },
  dueDate: {
    type: Date,
    required: [true, "A goal must have a due date"],
  },
});

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;
