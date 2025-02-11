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

export const getCourses = catchAsync(async (req, res) => {
  const courses = await Course.find();

  res.status(200).json({
    data: {
      courses,
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

export const getCourseById = catchAsync(async (req, res) => {
  const course = await Course.findById(req.params.id);

  res.status(200).json({
    data: {
      course,
    },
  });
});

export const updateCourse = catchAsync(async (req, res) => {
  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    data: {
      updatedCourse,
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
