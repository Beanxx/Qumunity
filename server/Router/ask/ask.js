"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./ask.ctrl");

router.post("/test", ctrl.process.register);

module.exports = router;
