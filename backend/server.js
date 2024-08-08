import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from './config/db.js';
import ProductRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Connection to MongoDB
DBConnection();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', ProductRoutes);
app.use('/api/users', userRoutes);

// Error Handling middleware
app.use(notFound);
app.use(errorHandler);

dotenv.config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
