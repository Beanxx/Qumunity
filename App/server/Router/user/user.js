"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.post("/join", ctrl.process.join);
router.get("/myquestion/:id", ctrl.output.myQuestions);
router.get("/myanswer/:id", ctrl.output.myAnswers);
router.get("/users", ctrl.output.allUsers);
router.get("/:id", ctrl.output.user);

module.exports = router;
