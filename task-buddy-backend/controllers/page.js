import User from '../models/User.js';
import { Page } from '../models/Page.js';

export const getPages = async (req, res) => {
    try {
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        const pages = user.pages;
        res.status(200).json({ pages });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPage = async (req, res) => {
    const { title } = req.body;

    try {
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        const newPage = new Page({ title });
        user.pages.push(newPage);
        await user.save();
        res.status(201).json({ page: newPage });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Page not created!"});
    }
}

export const deletePages = async (req, res) => {
    try {
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        user.pages = [];
        await user.save();
        res.status(200).json({ message: "All pages deleted." });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error!"});
    }
}

export const getPage = async (req, res) => {
    const { pageId } = req.params;
    try{
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        if(!user.pages.id(pageId)) return res.status(404).json({ message: "No page with that id!" });
        const page = user.pages.id(pageId);
        res.status(200).json({ page });
    } catch (error){
        console.log(error.message);
        res.status(500).json({ message: "Error!"});
    }
}

export const deletePage = async (req, res) => {
    const { pageId } = req.params;
    try{
        if(!req.userId) return res.status(401).json({ message: "Unauthenticated!" });
        const user = await User.findById(req.userId);
        if(!user.pages.id(pageId)) return res.status(404).json({ message: "No page with that id!" });
        user.pages.id(pageId).remove();
        await user.save();
        res.status(200).json({ message: "Page deleted." });
    } catch (error){
        console.log(error.message);
        res.status(500).json({ message: "Error!"});
    }
}