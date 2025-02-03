import express from "express";
import { protect } from "../controller/authController.js";
import { createProfile, getProfile } from "../controller/profileController.js";

const router = express.Router();

router.route("/").post(createProfile);
router.route("/:id").get(getProfile);

export default router;
