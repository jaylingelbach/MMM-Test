Module.register("MMM-Test", {
    defaults: {
        starterText: "Jay"
    },
    getDom: function() {
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = "Hello, World! " + this.config.foo
        var subElement = document.createElement("p")
        subElement.id = "COUNT"
        element.appendChild(subElement)
        return element
      },
      
      notificationReceived: function(notification, payload, sender) {
        switch(notification) {
          case "DOM_OBJECTS_CREATED":
            var timer = setInterval(()=>{
              this.sendSocketNotification("DO_YOUR_JOB", this.count)
              this.count++
            }, 1000)
            break
        }
      },
      
      socketNotificationReceived: function(notification, payload) {
        switch(notification) {
          case "I_DID":
            var elem = document.getElementById("COUNT")
            elem.innerHTML = "Count:" + payload
            break
        }
      },
});
