Module.register("MMM-Test", {
    defaults: {
        starterText: "Jay"
    },
    start: function () {},
    
    getDom: function() {
        console.log("A CONSOLE LOG");
        this.getQuote();
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = `Hello, ${starterText}!`
        return element
    },

    getQuote: async function () {
        try {
          const url = "https://stoic.tekloon.net/stoic-quote";
          const res = await fetch(url , {
            method: "GET",
            mode:"no-cors"
          });
          const data = await res.json();
          console.log("data", data);
          return data; // Ensure the function returns the fetched data
        } catch (error) {
          console.error("Error:", error);
          throw error; // Re-throw if you want the caller to handle it
        }
      },
    notificationReceived: function() {},
    socketNotificationReceived: function() {},

    })
