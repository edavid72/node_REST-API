import Sequelize from 'sequelize';

import { sequelize } from '../database/database.js';
import Task from './Task.js';

const Project = sequelize.define(
  'projects',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
    },
    delivery_date: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

Project.hasMany(Task, { foreignKey: 'project_id', sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: 'project_id', sourceKey: 'id' });

export default Project;
