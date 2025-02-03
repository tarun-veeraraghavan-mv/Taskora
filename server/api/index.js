import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../../server/api/config.env" });
import cors from "cors";

import { globalErrorHandler } from "../controller/globalErrorHandler.js";
import authRouter from "../routes/authRouter.js";
import profileRouter from "../routes/profileRoute.js";

mongoose
  .connect(
    "mongodb+srv://tarunv1911:mDiSJXOLvsotPsc9@cluster0.vqm1a.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB successfully connected");
  });

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is working",
  });
});

app.use("/api/v1/users", authRouter);
app.use("/api/v1/profile", profileRouter);

app.use(globalErrorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
