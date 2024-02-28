const express = require('express');
const cors = require('cors'); // Add this line
const userRouter = require("./router/users.js");
const taskRouter = require("./router/task.js");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { errormiddleware } = require('./middleware/error.js');
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

dotenv.config({
  path: "./data/config.env",
});

app.use(express.json());
app.use("/api/v1/users",  userRouter);
app.use("/api/v1/task",  taskRouter);

app.get("/", (req, res) => {
  res.send("Nice Working");
});
app.use(errormiddleware);

module.exports = app;
