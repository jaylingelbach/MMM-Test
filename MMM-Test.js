Module.register("MMM-Test", {
    defaults: {
        starterText: "Jay"
    },
    getDom: function() {
        var element = document.createElement("div")
        element.innerHTML = "Hello, World! " + this.config.starterText
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
    getHeader: function() {
    return "Jay's first module"
    }
});
