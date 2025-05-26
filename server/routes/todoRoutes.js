// server/routes/todoRoutes.js

import express from 'express';
import {
  getTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} from '../controllers/todoController.js';

const router = express.Router();  //initialise the router function here

// Defining routes and linking them to controller functions
router.get('/', getTodos);           // GET /api/todos - Get all todos
router.post('/', createTodo);         // POST /api/todos - Create a new todo
router.get('/:id', getTodoById);      // GET /api/todos/:id - Get a single todo by ID
router.put('/:id', updateTodo);       // PUT /api/todos/:id - Update a todo by ID
router.delete('/:id', deleteTodo);    // DELETE /api/todos/:id - Delete a todo by ID

export default router;