const User = require('../models/User');
const CustomError = require('../helpers/error/CustomError');
const asyncErrorWrapper = require('express-async-handler');
const Post = require('../models/Post');

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  return res.status(200).json({
    success: true,
    data: req.data,
  });
});

const getUsersPosts = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const userPosts = await Post.find({ user: id }).exec();
  return res.status(200).json({
    success: true,
    data: userPosts,
  });
});

const getUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await User.find();

  return res.status(200).json({
    success: true,
    data: users,
  });
});
const getPopularUsers = asyncErrorWrapper(async (req, res, next) => {
  const users = await User.find().limit(7);
  return res.status(200).json({
    success: true,
    data: users,
  });
});

module.exports = {
  getSingleUser,
  getUsers,
  getPopularUsers,
  getUsersPosts,
};
