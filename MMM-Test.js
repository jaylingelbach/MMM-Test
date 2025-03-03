let topPosts = "";

Module.register("MMM-Test", {
    defaults: {
        text: "Jay",
        apiBase: "https:reddit.com/r/programming/top.json?t=week&limit=3"
    },

    getTopPosts: async function() {
       const response =  fetch(this.config.apiBase, {
        mode: "no-cors",
        method: "GET"
       });
       return await response.json()
        .then((data) => {
            console.log("DATA: ",data);
            data.children.forEach((post) => {
                topPosts += post.data.title + "<br/>";
            });
        })
    },
    getDom: function() {
        var element = document.createElement("div")
        this.getTopPosts();
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
