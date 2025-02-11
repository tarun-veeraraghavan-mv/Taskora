import express from "express";
import { login, me, protect, signin } from "../controller/authController.js";
import { updateUser } from "../controller/userController.js";

const router = express.Router();

router.route("/signin").post(signin);
router.route("/login").post(login);
router.get("/me", protect, me);
router.patch("/:id", updateUser);

export default router;
