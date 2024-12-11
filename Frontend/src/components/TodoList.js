import React, { useEffect, useState } from "react";
import { getTodos } from "../services/api";
import TodoItem from "./TodoItem";

const TodoList = ({ refreshFlag }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos();
                setTodos(data);
            } catch (error) {
                console.error("Error fetching todos:", error.message);
            }
        };
        fetchTodos();
    }, [refreshFlag]);

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
