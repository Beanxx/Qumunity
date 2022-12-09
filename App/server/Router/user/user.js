"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.post("/join", ctrl.process.join);
router.post("/users", ctrl.process.allUsers);
router.get("/myquestion/:id", ctrl.output.myQuestions);
router.get("/myanswer/:id", ctrl.output.myAnswers);
router.get("/:id", ctrl.output.user);

module.exports = router;
