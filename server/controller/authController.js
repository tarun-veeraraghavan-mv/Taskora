import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";
import jwt from "jsonwebtoken";

const secret = "wskfhirswfhegirygheir";

export const signin = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);

  const token = jwt.sign({ id: newUser._id }, secret, {
    expiresIn: "90d",
  });

  res.status(200).json({
    token,
    data: {
      newUser,
    },
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Input all fields!"));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password!"));
  }

  const token = jwt.sign({ id: user._id }, secret, {
    expiresIn: "90d",
  });

  res.status(200).json({
    token,
    data: {
      user,
    },
  });
});

export const protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return next(
      new AppError("You are not logged in! Please log in again", 400)
    );

  const decoded = jwt.verify(token, secret);

  const user = await User.findById(decoded.id);

  if (!user) {
    return next(new AppError("User does not exist. Please log in again", 400));
  }

  req.user = user;

  next();
});

export const me = catchAsync(async (req, res) => {
  const user = req.user;

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
