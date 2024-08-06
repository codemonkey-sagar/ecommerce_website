import express from 'express';
const router = express.Router();
import products from '../data/products.js';

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(
      mongoose.Types.ObjectId(req.params.id)
    );
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

export default router;
