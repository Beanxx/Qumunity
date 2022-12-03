"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./detail.ctrl");

router.get("/:id", ctrl.output.detail);
router.get("/views/:id", ctrl.process.view);

router.put("/votes/like", ctrl.process.like);
router.put("/votes/dislike", ctrl.process.dislike);

router.delete("/delete", ctrl.process.delete);

module.exports = router;
