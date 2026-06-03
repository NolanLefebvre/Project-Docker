const express = require("express");
const router = express.Router();

const Task = require("../models/task");

// CREATE
router.post("/", (req, res) => {
  const task = Task.create(req.body);
  res.status(201).json(task);
});

// READ ALL
router.get("/", (req, res) => {
  res.json(Task.getAll());
});

// READ ONE
router.get("/:id", (req, res) => {
  const task = Task.getById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// UPDATE
router.put("/:id", (req, res) => {
  const task = Task.update(req.params.id, req.body);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// DELETE
router.delete("/:id", (req, res) => {
  const success = Task.delete(req.params.id);
  if (!success) return res.status(404).json({ message: "Task not found" });

  res.json({ message: "Task deleted" });
});

module.exports = router;
