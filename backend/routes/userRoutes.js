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
} from '../controllers/userController';

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserprofile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getuserById).put(updateUser);

export default router;
