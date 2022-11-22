"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./main.ctrl");

router.get("/", ctrl.output.main);
router.get("/tagSearch", ctrl.output.tagSearch);

router.post("/test", ctrl.process.test);

module.exports = router;
