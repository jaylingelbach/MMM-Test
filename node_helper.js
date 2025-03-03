const NodeHelper = require("node_helper");
require("dotenv").config();

module.exports = NodeHelper.create({
  start: function () {
    console.log("Starting node_helper for MMM-Test");
  }
});

socketNotificationReceived: function (notification, payload) {
    if (notification === "GET_NEW_QUOTE") {
        this.sendSocketNotification("NEW_QUOTE", { quote: "One does not simply walk into Mordor." });
    }
}

