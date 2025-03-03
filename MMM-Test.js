Module.register("MMM-Test", {
    // Module config defaults.
    defaults: {
      //update every 3 minutes
      updateInterval: 180000,
      //fade speed
      fadeSpeed: 4000,
      //initial load delay
      initialLoadDelay: 0,
      //retry delay
      retryDelay: 2500,
      //api url
      apiBase: "https://the-one-api.dev/v2/quote",
      headers: {
           'Accept': 'application/json',
           'Authorization': `Bearer 4WmkWtqKGICd2PuDY6Ot`,
      },
      quote:"",
      character:"",
      race:"",
      realm:""
   
    },
    getHeader: function () {
      return "Lord of the Ring quotes"
    },
    getStyles: function () {
      return [
        "style.css" // will try to load it from the vendor folder, otherwise it will load is from the module folder.
      ];
    },
   
    // Define start sequence.
    start: function () {
      Log.info("Starting module: " + this.name);
   
      setInterval(() => {
        this.updateDom(this.config.fadeSpeed);
      }, this.config.updateInterval);
    },
   
    /**
     * Retrieve the word of the day along with description, example, and author.
     *
     * @returns {string[]} array with word, description, example, and author
     */
    getData: async function () {
        try {
            const response = await fetch(this.config.apiBase, {
                method: "GET",
                headers: this.config.headers
            });
    
            const quotes = await response.json();
            const quoteData = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
    
            this.sendSocketNotification("GET_NEW_QUOTE", {});
    
            // Store quote separately
            this.quoteData = quoteData.dialog;
    
            const rawCharacters = await fetch(`https://the-one-api.dev/v2/character?_id=${quoteData.character}`, {
                headers: this.config.headers,
            });
    
            const characters = await rawCharacters.json();
            const characterData = characters.docs[0];
    
            // Store character details separately
            this.characterData = characterData.name;
            this.raceData = characterData.race || "No data given...";
            this.realmData = characterData.realm || (this.raceData === "Hobbit" ? "The Shire" : "No data given...");
    
            return quoteData;
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    },
    
   
    // Override dom generator.
    getDom: function () {
        const wrapper = document.createElement("div");
        wrapper.className = this.config.classes;
    
        this.getData().then(() => {
            if (!this.quoteData) {
                wrapper.innerHTML = "<div class='error'>Failed to load quote.</div>";
                return;
            }
    
            wrapper.innerHTML =
                "<div class='quote'>" +
                    "<blockquote>" +  
                        this.quoteData + // Use instance variable
                        "<div>" +
                        "<cite> -" +
                            this.characterData + // Use instance variable
                        "</cite>" +
                    "</div>" + 
                "<div class='race'>" +
                    "<strong>Race: </strong>" +
                    "<em>" +
                        this.raceData + // Use instance variable
                    "</em>" +
                "</div>" +
                "Realm: " +
                this.realmData + // Use instance variable
            "</div>";
        }).catch(error => {
            console.error("Error rendering quote: ", error);
            wrapper.innerHTML = "<div class='error'>Error loading quote.</div>";
        });
    
        return wrapper;
    }    
   });
   
   
   socketNotificationReceived: function (notification, payload) {
        if (notification === "NEW_QUOTE") {
            console.log("New quote received from node_helper:", payload.quote);
        }
    }