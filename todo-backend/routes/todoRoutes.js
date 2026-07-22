const protect = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  markAsRead,
} = require("../controllers/todoController");

router.post("/", protect, createTodo);

router.get("/", protect, getTodos);

router.put("/:id", protect, updateTodo);

router.delete("/:id", protect, deleteTodo);

router.patch("/:id/read", protect, markAsRead);

module.exports = router;