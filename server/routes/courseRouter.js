import express from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  getCourses,
  updateCourse,
} from "../controller/courseController.js";

const router = express.Router();

router.route("/").post(createCourse).get(getCourses);
router
  .route("/:id")
  .get(getAllCourses)
  .delete(deleteCourse)
  .patch(updateCourse);
router.get("/courses/:id", getCourseById);

export default router;
