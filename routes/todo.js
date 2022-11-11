import express from "express";
import controller from "../controllers/todoController.js"
const router = express.Router()

router.get('/', controller.listTodos);

router.post('/add_todo', controller.addTodo);

router.get('/:id', controller.getTodo);

export default router;