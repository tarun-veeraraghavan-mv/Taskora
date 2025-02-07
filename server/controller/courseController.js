import Course from "../models/courseModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createCourse = catchAsync(async (req, res) => {
  const newCourse = await Course.create(req.body);

  res.status(201).json({
    data: {
      newCourse,
    },
  });
});

export const getAllCourses = catchAsync(async (req, res) => {
  const allCourses = await Course.find({
    userId: req.params.id,
  });

  res.status(200).json({
    data: {
      allCourses,
    },
  });
});

export const deleteCourse = catchAsync(async (req, res, next) => {
  const deletedCourse = await Course.findByIdAndDelete(req.params.id);

  res.status(204).json({
    data: {
      deletedCourse,
    },
  });
});
