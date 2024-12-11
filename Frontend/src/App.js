import React, { useState, useEffect } from "react";
import TodoApp from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { getTodos, createTodo } from "./services/api";
import './App.css'
const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      const todoData = { task: newTodo.title, description: newTodo.description }; 
      await createTodo(todoData);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
      window.location.reload();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoApp todos={todos} />
    </div>
  );
};

export default App;
