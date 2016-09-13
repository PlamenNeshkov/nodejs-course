var express = require("express");

var app = express();

var port = 8080;

app.get("/", function(req, res) {
   res.send("Hello world"); 
});

app.get("/books", function(req, res) {
   res.send("Hello books"); 
});

app.listen(port, function(err) {
    console.log("Running server on port " + port);
});