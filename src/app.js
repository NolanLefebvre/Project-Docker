const express = require("express");
const app = express();

const taskRoutes = require("./routes/tasks");

app.use(express.json());

// routes
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Todo API is running 🚀");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
