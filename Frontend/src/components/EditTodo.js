import React, { useState, useEffect } from "react";
import { updateTodo } from "../services/api";

const EditTodo = ({ todo, onCancel, onUpdate }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTodo = { title, description };

    try {
      await updateTodo(todo._id, updatedTodo);
      onUpdate(updatedTodo);  
    } catch (error) {
      console.error("Error updating todo:", error.message);
    }
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Todo Description"
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTodo;
