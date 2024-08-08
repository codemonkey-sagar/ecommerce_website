import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
});

const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout user');
});

const getUserprofile = asyncHandler(async (req, res) => {
  res.send('Get user profile');
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update user profile');
});

const getUsers = asyncHandler(async (req, res) => {
  res.send('get user');
});

const getuserById = asyncHandler(async (req, res) => {
  res.send('get user by id');
});

const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete user');
});

const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserprofile,
  updateUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getuserById,
  updateUser,
};
