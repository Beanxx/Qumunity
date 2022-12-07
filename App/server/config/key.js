if (process.env.NODE_ENV === "production") {
  //배포상태
  module.exports = require("./production.js");
} else {
  //개발상태
  module.exports = require("./dev.js");
}
