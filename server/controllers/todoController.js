// the logic part

import Todo from '../models/Todo';

//Read
// export is here so that the function can be expoted and used in your routes file.
export const getTodos = async (req, res) =>  {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    }   catch (error) {
        res.status(500).json({message: error.message});
    }
};

//  Create a new todo
export const createTodo = async (req, res) => {
    const { task } = req.body; //  extract data from request body

    // Basic validation
  if (!task || task.trim().length < 3) {
    return res.status(400).json({ message: 'Task is required and must be at least 3 characters long.' }); // 400 Bad Request
  }

  const newTodo = new Todo({ task });
  
  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400 Bad Request if validation fails (e.g., minlength)
  }
}

// Read Get a single todo by ID
export const getTodoById = async (req, res) => {
    try {
      const { id } = req.params; // Get ID from URL parameters
      const todo = await Todo.findById(id); // Find todo by ID
  
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' }); // 404 Not Found
      }
  
      res.status(200).json(todo); // 200 OK and the found todo
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  