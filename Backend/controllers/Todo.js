import Todo from "../models/Todo.js";

export const getTodoById = async (req, res, next) => {
    const { todoId } = req.params;  

    try {
        const todo = await Todo.findById(todoId); 
        if (!todo) {
            return res.status(404).json({
                error: "Todo not found",
            });
        }
        req.todo = todo; 
        next(); 
    } catch (err) {
        return res.status(400).json({
            error: "Error fetching todo",
        });
    }
};


export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort("-createdAt");
        if (!todos) {
            return res.status(404).json({ message: "No todos found" });
        }
        res.json(todos);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch todos" });
    }
};

// export const createTodo = async(req,res)=>{
//     Todo.find().sort("-createdAt").exec((err, todos)=>{
//         if(err || !todos){
//             return res.status(500).json({
//                 error: "unsuccessful",
//             });
//         }
//         res.json(todos);
//     });
// }
export const createTodo = async (req, res) => {
    const { task,description } = req.body;

    if (!task) {
        console.log("Missing task:", req.body);
        return res.status(400).json({ error: "Task is required" });
    }

    try {
        const newTodo = new Todo({
            task: task,
            description: description,
        });

        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        console.error("Error creating todo:", error); 
        res.status(500).json({ error: "Failed to create todo" });
    }
};




export const getTodo = async (req, res) => {
    const { todoId } = req.params;

    try {
        const todo = await Todo.findById(todoId);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch todo",
            message: error.message,
        });
    }
};

export const deleteTodo = async (req, res) => {
    const { todoId } = req.params;

    try {
        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete todo" });
    }
};


export const updateTodo = async (req, res) => {
    const { todoId } = req.params;
    const { task } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            todoId,
            { task },
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(updatedTodo);  
    } catch (error) {
        res.status(500).json({ error: "Failed to update todo" });
    }
};



