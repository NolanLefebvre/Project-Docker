const crypto = require("crypto");

let tasks = [];

const TaskModel = {
  getAll: () => tasks,

  getById: (id) => tasks.find(t => t.id === id),

  create: (data) => {
    const task = {
      id: crypto.randomUUID(),
      title: data.title || "",
      description: data.description || "",
      status: data.status || "todo",
      createdAt: new Date(),
      updatedAt: new Date()
    };

    tasks.push(task);
    return task;
  },

  update: (id, data) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;

    task.title = data.title ?? task.title;
    task.description = data.description ?? task.description;
    task.status = data.status ?? task.status;
    task.updatedAt = new Date();

    return task;
  },

  delete: (id) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);
    return tasks.length !== initialLength;
  }
};

module.exports = TaskModel;
