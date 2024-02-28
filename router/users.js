const express = require('express');
const { register, login, getMyProfile, logout } = require('../controller/users.js');
const isAuthenticated = require("../middleware/auth.js");

const router = express.Router();

router.get("/", (_req, res) => {
    res.send("Nice Working");
});

router.post("/new", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", logout);

module.exports = router;
