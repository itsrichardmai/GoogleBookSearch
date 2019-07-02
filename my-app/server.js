const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require("path");
require('dotenv').config()

// Define middleware here

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here
require("./Routes/API")(app);

// ==============Possible use for HEROKU
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// ==================================================

//set up mongodb collection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI);

// Start the API server
console.log("Inside the Server!");
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});