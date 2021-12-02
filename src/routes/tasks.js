import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getOneTask,
  getTaskByProject,
  getTasks,
  updateTask,
} from '../controllers/task.controller.js';

const router = Router();

// /api/tasks/
router.post('/', createTask);
router.get('/', getTasks);

// /api/tasks/:task:id
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/:id', getOneTask);

// /api/tasks/project/:project_id
router.get('/project/:project_id', getTaskByProject);

export default router;
