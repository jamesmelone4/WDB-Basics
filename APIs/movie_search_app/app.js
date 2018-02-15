// initiate 'express' and 'request' packages
var express = require("express"),
    app = express(),
    request = require("request");


// tell 'express' that views will be in format of ejs, so that ".ejs" does NOT need to be appended to file name
app.set("view engine", "ejs");


// Render the '/results/ page when a 'get' request is sent
app.get("/results", function(req, res) {

  // create variables from the 'get' request query string to identify the search url to be used in the 'request' API call
  var query = req.query.search,
      url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
  
  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var data = JSON.parse(body)  // Change the JSON string into an object that can be referenced by JS
    res.render("results", {data: data, query: query});   // Render the '/results' page and pass the data variable to the page
  });
})


// Render the '/results/ page when a 'get' request is sent
app.get("/", function(req, res) {
  res.render("search");
})


// Tell the server to listen on port 3000 and let us know when it is listening
app.listen(3000, process.env.IP, function() {
    console.log("Movie App has started!!!");
})