"use strict";

var express = require("express");

var app = express();

var port = 8080;

app.use(express.static("public"));
app.use(express.static("src/views"));


app.get("/books", function(req, res) {
   res.send("Hello books"); 
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Running server on port " + port);
});
