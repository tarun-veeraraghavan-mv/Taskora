import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  markTodoCompleted,
} from "../controller/todoController.js";

const router = express.Router();

router.route("/").post(createTodo).get(getTodos);

router.route("/:id").delete(deleteTodo).patch(markTodoCompleted);

export default router;
