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
              Log.log("!!!!!!!!!!!!!! JSON RETURNED!!!!!!!!!!!: ", quotes);
              const quoteData = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
              console.log("QUOTE DATA: ",quoteData)
              this.config.quote = quoteData.dialog;
              const rawCharacters = await fetch(`https://the-one-api.dev/v2/character?_id=${quoteData.character}`, {
               headers: this.config.headers,
             });
             
               const characters = await rawCharacters.json();
               const characterData = characters.docs[0];
               console.log("CHAR DATA!!!!!!!!!!: ", characterData);
               this.config.character = characterData.name;
               this.config.race = characterData.race || "No data given...";
               this.config.realm = characterData.realm || (this.config.race === "Hobbit" ? "The Shire" : "No data given...");
   
              return quoteData;
       } catch(error) {
           console.error("Error fetching data: ", error);
       }
    },
   
    // Override dom generator.
    getDom: function () {
      const wrapper = document.createElement("div");
      wrapper.className = this.config.classes
        ? this.config.classes
        : "urban bright pre-line";
      this.getData().then((response) => {
        wrapper.innerHTML =
          "<div class='quote'>" +
            "<blockquote>" +  
            this.config.quote +
              " -- " +
              "<cite> " +
                this.config.character +
              "</cite>" +
          "</div>" +
          "<div class='race'>" +
            "<strong>Race: </strong>" +
              "<em>" +
              this.config.race +
            "</em>" +
            "Realm: " +
            this.config.realm
          "</div>"
      });
   
      return wrapper;
    }
   });
   
   