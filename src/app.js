import express, { json } from 'express';
import morgan from 'morgan';
import projectRoutes from './routes/projects.js';

import taskRoutes from './routes/tasks.js';

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
