import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    unique: true,
  },
  dateOfBirth: {
    type: Date,
    required: [true, "A user must have a date of birth"],
  },
  gender: {
    type: String,
    required: [true, "A user must have a gender"],
  },
  location: {
    type: String,
    required: [true, "A user must give a location"],
  },
  currentCollege: {
    type: String,
    required: [true, "A user must have a college"],
  },
  major: {
    type: String,
    required: [true, "A user must have a major"],
  },
  minor: {
    type: String,
    required: [true, "A user must have a minor"],
  },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
