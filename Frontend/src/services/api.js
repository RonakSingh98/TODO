const API_BASE_URL = "https://todo-olive-pi.vercel.app";

// Fetch all Todos
export const getTodos = async () => {
    const response = await fetch(`${API_BASE_URL}/todos`);
    if (!response.ok) throw new Error("Failed to fetch todos");
    return await response.json();
};

// Fetch a specific Todo by ID
export const getTodo = async (id) => {
    const response = await fetch(`${API_BASE_URL}/todo/${id}`);
    if (!response.ok) throw new Error("Failed to fetch todo");
    return await response.json();
};

// Create a new Todo
export const createTodo = async (todo) => {
    const todoData = {
        task: todo.task,
        description: todo.description
    };

    const response = await fetch(`${API_BASE_URL}/todo/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
    });

    if (!response.ok) {
        const error = await response.json();
        console.error("Error response:", error);
        throw new Error("Failed to create todo");
    }
    return await response.json();
};



// Update an existing Todo
export const updateTodo = async (id, todo) => {
    const response = await fetch(`${API_BASE_URL}/todo/${id}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error("Failed to update todo");
    return await response.json();
};

// Delete a Todo
export const deleteTodo = async (id) => {
    const response = await fetch(`${API_BASE_URL}/todo/${id}/delete`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete todo");
    return await response.json();
};
