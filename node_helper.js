const NodeHelper = require("node_helper");
require("dotenv").config();

module.exports = NodeHelper.create({
  start: function () {
    console.log("Starting node_helper for MMM-Test");
  }
});
