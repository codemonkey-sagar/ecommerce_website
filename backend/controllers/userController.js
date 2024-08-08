import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // SET JWT as HTTP-Only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }

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
  getUsers,
  deleteUser,
  getuserById,
  updateUser,
};
