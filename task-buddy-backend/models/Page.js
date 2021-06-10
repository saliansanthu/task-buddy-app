import mongoose from 'mongoose';
import { taskSchema } from './Task.js';

export const pageSchema = mongoose.Schema({
    title: { type: String, required: true },
    tasks: { type: [ taskSchema ], default: [] }
});

export const Page = mongoose.model('Page', pageSchema);

