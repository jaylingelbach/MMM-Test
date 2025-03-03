let topPosts = "";

fetch("https:reddit.com/r/programming/top.json?t=week&limit=3")
.then(response => response.json)
.then((data) => {
    data.data.children.forEach((post) => {
        topPosts += post.data.title + <br/>;
    }
)},
Module.register("MMM-Test", {
    defaults: {
        text: "Jay"
    },
    getDom: function() {
        this.sendNotification("MY_MODULE_READY_FOR_ACTION", { foo: "bar" });
        var element = document.createElement("div")
        element.innerHTML = topPosts;
        return element
      },
      
    notificationReceived: function(notification, payload, sender) {
    switch(notification) {
        case "DOM_OBJECTS_CREATED":
        Log.log(`Dom objects created... Can manipulate the DOM now.  Notification: ${notification}`)
        break
    }
    if (sender) {
        Log.log(`Sender: ${sender.name}, notification: ${notification} `)
    } else {
        Log.log(`No sender, Payload: ${payload}`)
    }
    },
    getHeader: function() {
    return "Jay's first module"
    }
});
