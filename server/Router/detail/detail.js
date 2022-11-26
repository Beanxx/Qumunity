"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./detail.ctrl");

router.get("/:id", ctrl.output.detail);

module.exports = router;
