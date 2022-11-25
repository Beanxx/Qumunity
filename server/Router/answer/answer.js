"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./answer.ctrl");

router.get("/:id", ctrl.output.answer);
router.post("/:id", ctrl.process.register);

module.exports = router;
