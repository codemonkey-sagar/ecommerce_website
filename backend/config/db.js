import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// database connection
const DBConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database (MongoDB) Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

export default DBConnection;
