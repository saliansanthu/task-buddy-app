import express from 'express';

import auth from '../middlewares/auth.js';

import { getPages, createPage, deletePages, getPage, deletePage } from '../controllers/page.js';
import { createTask, deleteTask, updateTask } from '../controllers/task.js';

const router = express.Router();

//page-routes
router.get('/', auth, getPages);
router.post('/', auth, createPage);
router.delete('/', auth, deletePages);
router.get('/:pageId', auth, getPage);
router.delete('/:pageId', auth, deletePage);

//task-routes
router.post('/:pageId', auth, createTask);
router.delete('/:pageId/:taskId', auth, deleteTask);
router.put('/:pageId/:taskId', auth, updateTask);

export default router;
