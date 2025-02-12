import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// dotenv.config({ path: "../api/config.env" });
dotenv.config({ path: "./config.env" });
import cors from "cors";

// SECURITY
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

import { globalErrorHandler } from "../controller/globalErrorHandler.js";
import authRouter from "../routes/authRouter.js";
import profileRouter from "../routes/profileRoute.js";
import courseRouter from "../routes/courseRouter.js";
import userRouter from "../routes/userRoute.js";
import todoRouter from "../routes/todoRouter.js";

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB successfully connected");
});

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Rate limiting, http-headers, data sanitization and NoSQL query ijection, cross site scripting, paramter pollution
// const limiter = rateLimit({
//   max: 10000,
//   windowMs: 1000 * 60 * 60,
//   message: "Too many requests from this IP, please try again",
// });
// app.use("/api", limiter);
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is working",
  });
});

app.get("/api/test", (req, res) => {
  res.status(200).json({
    message: "This /api endpoint works!!",
  });
});

app.use("/api/v1/users", authRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/todo", todoRouter);

app.use(globalErrorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
console.log(process.env.PORT);
