import Profile from "../models/profileModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createProfile = catchAsync(async (req, res) => {
  const newProfile = await Profile.create(req.body);

  res.status(201).json({
    data: {
      newProfile,
    },
  });
});

export const getProfile = catchAsync(async (req, res) => {
  const profile = await Profile.findOne({ userId: req.params.id });

  res.status(200).json({
    data: {
      profile,
    },
  });
});

export const updateProfile = catchAsync(async (req, res) => {
  const updatedProfile = await Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    data: {
      updatedProfile,
    },
  });
});
