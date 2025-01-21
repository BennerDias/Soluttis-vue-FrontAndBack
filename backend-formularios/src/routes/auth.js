const express = require("express");
const { login, register } = require("../controllers/authController.js");
const { validateUser } = require("../middlewares/validation");

const router = express.Router();

router.post("/register", validateUser, register);
router.post("/login", validateUser, login);

module.exports = router;
