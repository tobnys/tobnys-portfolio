// IMPORTS
const express = require("express");
const config = require("./config");

// APP INIT
const app = express();

// APP USAGE
app.use(express.static("public"));

// ENDPOINT LOGIC
app.get("/", (req, res) => {

});

app.listen(config.PORT);