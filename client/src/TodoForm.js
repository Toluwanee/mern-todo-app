// client/src/components/TodoForm.js
import React, { useState } from 'react';
import axios from 'axios';

function TodoForm({ fetchTodos }) {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (task.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    try {
      await axios.post('/api/todos', { task }); // Make POST request to backend
      setTask(''); // Clear the input field
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error creating todo:', error);
      alert('Failed to add todo. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;