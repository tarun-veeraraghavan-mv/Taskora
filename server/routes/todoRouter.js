import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
} from "../controller/todoController.js";

const router = express.Router();

router.route("/").post(createTodo).get(getTodos);

router.route("/:id").delete(deleteTodo);

export default router;
