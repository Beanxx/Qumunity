"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./detail.ctrl");

router.get("/:id", ctrl.output.detail);

router.get("/views/:id", ctrl.process.view);

router.delete("/delete", ctrl.process.delete);

module.exports = router;
