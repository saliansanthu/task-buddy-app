import mongoose from 'mongoose';

export const taskSchema = mongoose.Schema({
    title: String,
    content: String
});

export const Task = mongoose.model('Task', taskSchema);