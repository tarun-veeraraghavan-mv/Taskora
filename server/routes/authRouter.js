import express from "express";
import { login, me, protect, signin } from "../controller/authController.js";

const router = express.Router();

router.route("/signin").post(signin);
router.route("/login").post(login);
router.get('/me', protect, me)

export default router;
