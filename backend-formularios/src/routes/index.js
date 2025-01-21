const express = require("express");
const authRoutes = require("./auth");
const formRoutes = require("./forms");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/forms", formRoutes);

module.exports = router;
