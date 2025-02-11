import Todo from "../models/todoModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createTodo = catchAsync(async (req, res) => {
  const newTodo = await Todo.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      newTodo,
    },
  });
});

export const getTodos = catchAsync(async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json({
    status: "success",
    data: {
      todos,
    },
  });
});

export const deleteTodo = catchAsync(async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

  res.status(204).json({
    data: {
      deletedTodo,
    },
  });
});
