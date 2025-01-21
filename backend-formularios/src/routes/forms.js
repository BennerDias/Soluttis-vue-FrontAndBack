const express = require("express");
const { createForm, getForms } = require("../controllers/formController");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", createForm);
router.get("/", getForms);

module.exports = router;
