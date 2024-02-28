const Task = require("../models/task.js");
const {ErrorHandler} = require("../middleware/error.js")

const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        await Task.create({
            title,
            description,
            user: req.user,
        });

        res.status(201).json({
            success: true,
            message: "Task added Successfully",
        });
    } catch (error) {
        next(error);
    }
};
const getMyTask = async (req, res, next) => {
    const userid = req.user;

    const task = await Task.find({ user: userid });

    res.status(201).json({
        success: true,
        task,
    });
};

const updateTask = async (req, res, next) => {

    const task = await Task.findById(req.params.id);

    if (!task) return next(new Error("Invalid Id"));
    task.isCompleted = !task.isCompleted;

    await task.save();


    res.status(201).json({
        success: true,
        message: "update successfully",
    });

};
const deleteTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if (!task) return next(new ErrorHandler("task not found",404));

    await task.deleteOne();

    res.status(201).json({
        success: true,
        message: "deleted successfully",
    });

};

module.exports = { newTask, getMyTask, updateTask, deleteTask };
