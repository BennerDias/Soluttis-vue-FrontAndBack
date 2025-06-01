const express = require("express");
const { createForm, 
        getForms,
        deleteForm, 
        updateForm
    } = require("../controllers/formController");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", createForm);
router.get("/", getForms);
router.put("/:id", updateForm);
router.delete("/:id", deleteForm);


module.exports = router;
