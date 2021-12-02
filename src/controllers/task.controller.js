import Task from '../models/Task.js';

export async function createTask(req, res) {
  const { name, done, p_id: project_id } = req.body;

  try {
    const newTask = await Task.create(
      {
        name,
        done,
        project_id,
      },
      {
        fields: ['name', 'done', 'project_id'],
      }
    );
    res.json({
      message: 'New task created',
      data: newTask,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll({
      attributes: ['id', 'name', 'done', 'project_id'],
      order: [['id', 'DESC']],
    });

    res.json({
      message: 'You have obtained all your tasks',
      data: tasks,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function deleteTask(req, res) {
  const { id } = req.params;

  try {
    const deleteRowTask = await Task.destroy({
      where: {
        id: id,
      },
    });

    res.json({
      message: `The task with id: ${id} has been eliminated`,
      count: deleteRowTask,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { name, done, project_id } = req.body;

  try {
    const task = await Task.findOne({
      attributes: ['id', 'name', 'done', 'project_id'],
      where: { id },
    });

    const updatedTask = await task.update(
      {
        name,
        done,
        project_id,
      },
      {
        where: { id },
      }
    );

    return res.json({
      message: `Task has been updated`,
      updatedTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
}

export async function getOneTask(req, res) {
  const { id } = req.params;

  const task = await Task.findOne({
    where: { id: id },
    attributes: ['id', 'name', 'done', 'project_id'],
  });

  res.json({
    message: `Selected Project: ${id}`,
    data: task,
  });
}

export async function getTaskByProject(req, res) {
  const { project_id } = req.params;

  const tasks = await Task.findAll({
    where: {
      project_id,
    },
    attributes: ['id', 'name', 'done', 'project_id'],
  });

  res.json({ tasks });
}
