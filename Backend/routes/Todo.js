import express from "express";

import {
    createTodo,
    getTodoById,
    getAllTodos,
    getTodo,
    deleteTodo,
    updateTodo,
} from "../controllers/Todo.js";

const router = express.Router();

router.param("todoID",getTodoById);
router.get("/todos",getAllTodos);
router.get("/todo/:todoId" , getTodo);
router.post("/todo/create",createTodo);
router.patch("/todo/:todoId/update", updateTodo);
router.delete("/todo/:todoId/delete",deleteTodo);

export default router;