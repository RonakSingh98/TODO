import React from "react";
import { deleteTodo } from "../services/api";


const TodoItem = ({ todo}) => {

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this Todo?")) {
      try {
        await deleteTodo(todo._id);
        window.location.reload()
        
      } catch (error) {
        console.error("Error deleting todo:", error.message);
      }
    }
  };
 return (
    <div>
     
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <button id='x' onClick={handleDelete}>Delete</button>
          
    </div>
  );
};

export default TodoItem;
