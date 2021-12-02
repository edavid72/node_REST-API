import Project from '../models/Project.js';

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();

    res.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createProject(req, res) {
  const { name, priority, description, delivery_date } = req.body;

  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        delivery_date,
      },
      {
        fields: ['name', 'priority', 'description', 'delivery_date'],
      }
    );
    if (newProject) {
      return res.json({
        message: 'Project created successfully',
        data: newProject,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
}

export async function getOneProject(req, res) {
  const { id } = req.params;

  const project = await Project.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    message: `Selected Project: ${id}`,
    data: project,
  });
}

export async function deleteProject(req, res) {
  const { id } = req.params;

  try {
    const deleteRowCount = await Project.destroy({
      where: {
        id: id,
      },
    });

    res.json({
      message: `Project ${id} was eliminated successfully`,
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const { name, priority, description, delivery_date } = req.body;

  const projects = await Project.findAll({
    attributes: ['id', 'name', 'priority', 'description', 'delivery_date'],
    where: {
      id: id,
    },
  });

  if (projects.length > 0) {
    projects.forEach(async (project) => {
      await project.update({
        name,
        priority,
        description,
        delivery_date,
      });
    });
  }

  return res.json({
    message: `The project with id: ${id} has been update`,
    data: projects,
  });
}
