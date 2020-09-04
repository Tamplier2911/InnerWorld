const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/usersModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: users,
    result: users.length,
  });
});

exports.createOneUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  if (!user)
    return next(
      new AppError('Creation process failed, please try again.', 404)
    );

  res.status(201).json({
    status: 'success',
    data: user,
  });
});

exports.getOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne(req.params.id);

  if (!user) return next(new AppError('No documents found with that ID.', 404));

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.updateOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) return next(new AppError('No document found with that ID.', 404));

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.deleteOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) return next(new AppError('No document found with that ID.', 404));

  res.status(204).json({
    status: 'success',
    message: null,
  });
});
