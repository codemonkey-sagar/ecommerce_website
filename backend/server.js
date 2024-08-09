import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import DBConnection from './config/db.js';
import ProductRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Connection to MongoDB
DBConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser Middleware
app.use(cookieParser());

// Body parser middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Front-end URL
    credentials: true, // Allow cookies to be sent with requests
  })
);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', ProductRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Error Handling middleware
app.use(notFound);
app.use(errorHandler);

dotenv.config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
