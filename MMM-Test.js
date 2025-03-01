Module.register("MMM-Test", {
    defaults: {
        starterText: "Jay"
    },
    start: function () {},
    
    getDom: function() {
        console.log("A CONSOLE LOG");
        var element = document.createElement("div");
        element.className = "myContent";
        element.innerHTML = `Hello, ${this.defaults.starterText}!`;
        return element;
    },


    notificationReceived: function() {},
    socketNotificationReceived: function() {},
});
