import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000; // Use port from environment variable or default to 5000
const MONGODB_URI = process.env.MONGODB_URI; // MongoDB connection string

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies for incoming reque

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  // did this after routing through the controller.
app.use('/api/todos', todoRoutes);

 // Basic/home route
app.get('/', (req, res) => {
    res.send('Welcome to the MERN Todo App API!');
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

