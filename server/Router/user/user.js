"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.post("/join", ctrl.process.join);

module.exports = router;
