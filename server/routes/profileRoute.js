import express from "express";
import { protect } from "../controller/authController.js";
import {
  createProfile,
  getProfile,
  updateProfile,
} from "../controller/profileController.js";

const router = express.Router();

router.route("/").post(createProfile);
router.route("/:id").get(getProfile).patch(updateProfile);

export default router;
