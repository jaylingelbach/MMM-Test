Module.register("MMM-Test", {
    defaults: {
        starterText: "Jay"
    },
    getDom: function() {
        this.sendNotification("MY_MODULE_READY_FOR_ACTION", { foo: bar });
        var element = document.createElement("div")
        element.innerHTML = "Hello,  " + this.config.starterText
        return element
      },
      
    notificationReceived: function(notification, payload, sender) {
    switch(notification) {
        case "DOM_OBJECTS_CREATED":
        Log.log(`Dom objects created... Can manipulate the DOM now.  Notification: ${notification}`)
        break
    }
    if (sender) {
        Log.log(`Sender: ${sender.name}, payload: ${payload}, notification: ${notification} `)
    } else {
        Log.log(`No sender, Payload: ${payload}`)
    }
    },
    getHeader: function() {
    return "Jay's first module"
    }
});
