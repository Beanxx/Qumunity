"use strict";

const mongoose = require("mongoose");
const app = require("../index");
const config = require("../config/dev");
const port = 4000;

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log(`listening on port ${port}`);
      console.log("connecting MongoDB!");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});
