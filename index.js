import express from 'express';
import bodyParser from "body-parser";
import todoRoutes from './routes/todo.js'

import mongoose from "mongoose";
const app = express();
const PORT = 4000;


app.use(bodyParser.json());
app.use('/todo', todoRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})