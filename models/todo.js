import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/usersdb',{
    useNewurlParser: true,
    useUnifiedTopology:true
}
);

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        requires: true
    },
    description:{
        type: String,
        requires: true
    },
    completed:{
        type: Boolean,
        requires: false,
        default: false
    }
}, {timestamps: true});

const todo = mongoose.model("todo", todoSchema);

export default todo