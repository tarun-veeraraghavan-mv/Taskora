import Todo from "../models/todoModel.js";

export const createTodo = async (req, res) => {
  const newTodo = await Todo.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      newTodo,
    },
  });
};

export const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json({
    status: "success",
    data: {
      todos,
    },
  });
};
