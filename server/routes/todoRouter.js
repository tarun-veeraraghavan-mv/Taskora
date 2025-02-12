import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  markTodoCompleted,
} from "../controller/todoController.js";
import { protect } from "../controller/authController.js";

const router = express.Router();

router.route("/").post(protect, createTodo).get(getTodos);

router.route("/:id").delete(protect, deleteTodo).patch(markTodoCompleted);

export default router;
