Module.register("MMM-Test", {
    defaults: {
        starterText: "Jay"
    },
    start: function () {},
    
    getDom: function() {
        console.log("A CONSOLE LOG");
        this.getQuote();
        var element = document.createElement("div");
        element.className = "myContent";
        element.innerHTML = `Hello, ${this.defaults.starterText}!`;
        return element;
    },

    getQuote: async function () {
        try {
            const url = "https://stoic.tekloon.net/stoic-quote";
            const res = await fetch(url);
            const data = await res.json();
            console.log("data", data);
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    },

    notificationReceived: function() {},
    socketNotificationReceived: function() {},
});
