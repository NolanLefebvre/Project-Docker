const request = require("supertest");
const app = require("../../src/app");

describe("Todo API", () => {

  let taskId;

  test("POST /tasks", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({
        title: "Docker test",
        description: "API test"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");

    taskId = res.body.id;
  });

  test("GET /tasks", async () => {
    const res = await request(app).get("/tasks");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /tasks/:id", async () => {
    const res = await request(app).get(`/tasks/${taskId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(taskId);
  });

  test("DELETE /tasks/:id", async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);

    expect(res.statusCode).toBe(200);
  });
});
