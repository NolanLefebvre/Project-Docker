const Task = require("../../src/models/task");

describe("Task Model", () => {
  test("should create a task", () => {
    const task = Task.create({
      title: "Test",
      description: "Desc"
    });

    expect(task).toHaveProperty("id");
    expect(task.title).toBe("Test");
  });

  test("should get all tasks", () => {
    const tasks = Task.getAll();
    expect(Array.isArray(tasks)).toBe(true);
  });
});
