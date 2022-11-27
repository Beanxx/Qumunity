"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.post("/join", ctrl.process.join);
router.get("/:id", ctrl.output.myQuestions);

module.exports = router;
