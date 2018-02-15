var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
  res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
  res.send("Bye!");
})

// "/dog" => "Woof!"
app.get("/dog", function(req, res) {
  console.log("Someone made a request to /dog")
  res.send("Woof!");
})

// route parameters (i.e. variables) allow us to define a pattern within the get function; use the ":" to identify a variable
app.get("/r/:subredditName", function(req, res) {
  console.log(req.params);
  res.send("Welcome to a subreddit example!");
})

// route parameters work for anything that we want to be a variable
app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  var subreddit = req.params.subredditName;
  // console.log(req.params);
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
})

// use "*" get for any pages not specified in a get function
app.get("*", function(req, res) {
  res.send("You are a star!");
})

// Tell Express to listen for requests (start server)
app.listen(3000,process.env.IP, function() {
  console.log("Server has started");
});