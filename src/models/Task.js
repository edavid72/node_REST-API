import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';

const Task = sequelize.define(
  'tasks',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    done: {
      type: Sequelize.BOOLEAN,
    },
    project_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  },
);

export default Task;
