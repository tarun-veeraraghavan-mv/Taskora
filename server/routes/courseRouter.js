import express from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
} from "../controller/courseController.js";

const router = express.Router();

router.route("/").post(createCourse);
router.route("/:id").get(getAllCourses).delete(deleteCourse);

export default router;
