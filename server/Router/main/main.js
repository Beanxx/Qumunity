"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./main.ctrl");

router.get("/", ctrl.output.main);
router.get("/tags", ctrl.output.tags);

router.post("/tagSearch", ctrl.process.tagSearch);

module.exports = router;
