import express from "express";
import { getAllUsers, updateUser } from "../controller/userController.js";

const router = express.Router();

router.route("/").get(getAllUsers);

router.route("/:id").patch(updateUser);

export default router;
