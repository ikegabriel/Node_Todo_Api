import { response } from 'express';
import {v4 as uuidv4} from 'uuid';
import todoModel from '../models/todo.js';

const controller = {};


controller.addTodo = async(req,res)=>{
    const todo= new todoModel(req.body);

    try{
        await todo.save();
        res.send(todo);
    }catch(err){
        res.status(500).send(err);
    }
};

controller.listTodos = async (req,res)=>{
    const todos = await todoModel.find({});

    try{
        res.send(todos);
    }catch(err){
        res.status(500).send(err);
    }
};

controller.getTodo = async (req,res)=>{
    const id = req.params.id
    const todo = await todoModel.findById({_id: id})

    try{
        res.send(todo);
    }catch(err){
        res.status(500).send(err);
    }
};

export default controller;