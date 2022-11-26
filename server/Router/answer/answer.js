"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./answer.ctrl");

router.post("/", ctrl.process.getAnswers);
router.post("/register", ctrl.process.register);

module.exports = router;
