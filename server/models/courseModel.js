import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  semesterNumber: {
    type: Number,
    required: [true, "A semester must have a number"],
  },
  courseTitle: {
    type: String,
    required: [true, "A semester must have a course title"],
  },
  proffessorName: {
    type: String,
    required: [true, "A semester must have a proffessor"],
  },
  courseDesc: {
    type: String,
    required: [true, "A semester must have a course description"],
  },
  startDate: {
    type: Date,
    required: [true, "A course must have a start date"],
  },
  endDate: {
    type: Date,
    required: [true, "A course must have an end date"],
  },
  startTime: {
    type: String,
    required: [true, "A course must have a starting time"],
  },
  endTime: {
    type: String,
    required: [true, "A course must have an ending time"],
  },
  progress: {
    type: String,
    required: [true, "A course must have a progress"],
  },
  grade: {
    type: Number,
  },
  difficulty: {
    type: String,
    required: [true, "A course must have a difficulty"],
  },
  links: {
    type: String,
  },
  semesterColor: {
    type: String,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
