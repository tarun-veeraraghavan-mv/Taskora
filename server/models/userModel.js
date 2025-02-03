import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  avatar: {
    type: String,
    default: "https://i.pravatar.cc/48",
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    select: false,
    minLength: [8, "A password must have atleast 8 charecter"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 14);

  next();
});

userSchema.methods.checkPassword = async (candidatePassword, password) => {
  return await bcrypt.compare(candidatePassword, password);
};

const User = mongoose.model("User", userSchema);

export default User;
