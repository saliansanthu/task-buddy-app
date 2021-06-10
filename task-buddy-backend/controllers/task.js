import User from '../models/User.js';
import { Task } from '../models/Task.js';

export const createTask = async (req, res) => {
    const { pageId } = req.params;
    const { title, content } = req.body;
    try{
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        if(!user.pages.id(pageId)) return res.status(404).json({ message: "No page with that id!" });
        const newTask = new Task({ title, content });
        user.pages.id(pageId).tasks.push(newTask);
        await user.save();
        res.status(200).json({ task: newTask });
    } catch (error){
        console.log(error.message);
        res.status(500).json({ message: "Error!"});
    }
}

export const deleteTask = async (req, res) => {
    const { pageId, taskId } = req.params;
    try{
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        if(!user.pages.id(pageId)) return res.status(404).json({ message: "No page with that id!" });
        if(!user.pages.id(pageId).tasks.id(taskId)) return res.status(404).json({ message: "No task with that id!" });
        user.pages.id(pageId).tasks.id(taskId).remove();
        await user.save();
        res.status(200).json({ message: "Task deleted." });
    } catch (error){
        console.log(error.message);
        res.status(500).json({ message: "Error!"});
    }
}

export const updateTask = async (req, res) => {
    const { pageId, taskId } = req.params;
    const { title, content } = req.body;
    try{
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        if(!user.pages.id(pageId)) return res.status(404).json({ message: "No page with that id!" });
        if(!user.pages.id(pageId).tasks.id(taskId)) return res.status(404).json({ message: "No task with that id!" });
        user.pages.id(pageId).tasks.id(taskId).title = title;
        user.pages.id(pageId).tasks.id(taskId).content = content;
        await user.save();
        const task = user.pages.id(pageId).tasks.id(taskId);
        res.status(200).json({ task });
    } catch (error){
        console.log(error);
        res.status(500).json({ message: "Error!"});
    }
}