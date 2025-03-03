const NodeHelper = require("node_helper");
require('dotenv').config();
console.log("ENV: ", process.env);
Log.log("ENV: ", process.env || "something went wrong");


let config = {
    address: "localhost", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out or empty, is "localhost"
    port: 8080,
    basePath: "/", // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
    // you must set the sub path here. basePath must end with a /
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],
    
    useHttps: false,
    zoom: 0.9, // Support HTTPS or not, default "false" will use HTTP
    httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
    httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true
    
    language: "en",
    locale: "en-US",   // this variable is provided as a consistent location
    // it is currently only used by 3rd party modules. no MagicMirror code uses this value
    // as we have no usage, we  have no constraints on what this field holds
    // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities
    
    logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 12,
    units: "imperial",
    
    modules: [
         {
               module: "alert",
         },
         {
               module: "updatenotification",
               position: "top_bar"
         },
         {
               module: "clock",
               position: "top_left"
         },
         {
               module: "MMM-Test",
               position: "bottom_right"
         },
         {
            module: "weather",
            position: "top_right",
            config: {
                  weatherProvider: "weatherbit",
type: "current",
updateInterval:"36000000",
showHumidity:"feelslike",
colored:true,
lat:"38.56275",
lon:"-90.03445",
apiKey:"5dcd17ba5c4d4ef99b8446b18ef03f83",
}
},
 {
module: "weather",
position: "top_right",
config: {
weatherProvider: "weatherbit",
updateInterval:"36000000",
maxNumberOfDays:"7",
colored:true,
type: "forecast",
lat:"38.56275",
lon:"-90.03445",
apiKey:"5dcd17ba5c4d4ef99b8446b18ef03f83",
}
},
 {
 module: "newsfeed",
 position: "bottom_bar",
 config: {
 feeds: [
 {
 title: "New York Times",
 url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
 }
 ],
 showSourceTitle: true,
 showPublishDate: true,
 broadcastNewsFeeds: true,
 broadcastNewsUpdates: true
 }
 },{
 
 module: "MMM-DisneyWaitTimes",
 header: "Hollywood Studios",
 position: "bottom_left",
 config: {
 park: {
 name: "Hollywood Studios - Walt Disney World",
 rides: [
 "Alien Swirling Saucers",
 "Mickey & Minnie's Runaway Railway",
 "Millennium Falcon: Smugglers Run",
 "Rock 'n' Roller Coaster Starring Aerosmith",
 "Slinky Dog Dash",
 "Star Tours – The Adventures Continue",
 "Star Wars: Rise of the Resistance",
 "Toy Story Mania!"
 ]
 },
 
 }
 },
 {
 module: "MMM-DisneyWaitTimes",
 header: "Magic Kingdom",
 position: "top_left",
 config: {
 park: {
 name: "Magic Kingdom - Walt Disney World",
 rides: [
 "Haunted Mansion",
 "it's a small world",
 "Jungle Cruise",
 "Seven Dwarfs Mine Train",
 "Space Mountain",
 "Under the Sea - Journey of The Little Mermaid",
 "Walt Disney's Carousel of Progress",
]
}
}
} 
]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }   