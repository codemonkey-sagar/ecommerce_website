import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(admin, createProduct);
router.route('/:id').get(getProductById).put(admin, updateProduct);
router.route('/:id').delete(admin, deleteProduct);

export default router;
