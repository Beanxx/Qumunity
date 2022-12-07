"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./ask.ctrl");

router.post("/register", ctrl.process.register);
router.post("/edit", ctrl.process.edit);

module.exports = router;
