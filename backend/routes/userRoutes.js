import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUsers,
  getUserById,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

export default router;
