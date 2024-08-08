import express from 'express';
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserprofile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getuserById,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserprofile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(getuserById)
  .put(updateUser);

export default router;
