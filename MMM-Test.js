let topPosts = "";

Module.register("MMM-Test", {
    defaults: {
        text: "Jay",
        apiBase: "https:reddit.com/r/programming/top.json?t=week&limit=3"
    },

    getTopPosts: async function() {
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxy + this.config.apiBase);
    //    const response =  await fetch(this.config.apiBase, {
    //     method: "GET",
    //     mode:"cors",
    //     headers: {
    //         "Content-Type": "application-json"
    //     }
    //    });
       const res = await response.json();
        Log.Log("!!!!!!!!! RES:  ", res);
            // data.children.forEach((post) => {
            //     topPosts += post.data.title + "<br/>";
           
        //})
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
