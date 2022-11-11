import express from "express";
import controller from "../controllers/todoController.js"
const router = express.Router()

router.get('/', controller.listTodos);

router.get('/:id', controller.getTodo);

router.post('/add_todo', controller.addTodo);

router.patch('/update/:id', controller.updateTodo);

router.delete('/delete/:id', controller.deleteTodo);

router.post('/complete/:id', controller.completeTodo);


export default router;