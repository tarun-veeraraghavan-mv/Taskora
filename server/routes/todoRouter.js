import express from "express";
import { createTodo, getTodos } from "../controller/todoController.js";

const router = express.Router();

router.route("/").post(createTodo).get(getTodos );

export default router;
