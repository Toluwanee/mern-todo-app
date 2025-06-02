// client/src/components/TodoItem.js
import React, { useState } from 'react';
import axios from 'axios';

function TodoItem({ todo, fetchTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleToggleComplete = async () => {
    try {
      await axios.put(`/api/todos/${todo._id}`, { completed: !todo.completed });
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error toggling todo status:', error);
      alert('Failed to update todo status.');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        await axios.delete(`/api/todos/${todo._id}`);
        fetchTodos(); // Refresh the todo list
      } catch (error) {
        console.error('Error deleting todo:', error);
        alert('Failed to delete todo.');
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    if (editedTask.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    try {
      await axios.put(`/api/todos/${todo._id}`, { task: editedTask });
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
      alert('Failed to save todo.');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask(todo.task); // Revert to original task
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSaveEdit} className="save-button">Save</button>
          <button onClick={handleCancelEdit} className="cancel-button">Cancel</button>
        </>
      ) : (
        <>
          <span
            className="todo-task"
            onClick={handleToggleComplete} // Toggle completed status on task click
          >
            {todo.task}
          </span>
          <div className="todo-actions">
            <button onClick={handleEdit} className="edit-button">Edit</button>
            <button onClick={handleDelete} className="delete-button">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;