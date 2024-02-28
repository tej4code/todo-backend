const express = require("express");
const isAuthenticated = require("../middleware/auth.js");
const { newTask, getMyTask, updateTask, deleteTask } = require('../controller/task.js');

const router = express.Router();


router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, getMyTask);

router.route("/:id")
    .put(isAuthenticated, updateTask)
    .delete(isAuthenticated, deleteTask);

module.exports = router;
