import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from './config/db.js';
import ProductRoutes from './routes/productRoutes.js';

// Connection to MongoDB
DBConnection();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', ProductRoutes);

dotenv.config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
