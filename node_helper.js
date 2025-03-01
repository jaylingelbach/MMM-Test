var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  start: function() {},
  socketNotificationReceived: function() {},
})

var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  start: function() {
    this.countDown = 10000000
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "DO_YOUR_JOB":
        this.sendSocketNotification("I_DID - in node_helper", (this.countDown - payload))
        break
    }
  },
})

