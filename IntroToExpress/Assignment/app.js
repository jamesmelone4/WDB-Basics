var express = require('express'),
    app = express(),
    animalSound = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof Woof"
    };

// Visting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
})

// Visiting "/speak/:animal" should print "The :animal says animalSound!"
app.get("/speak/:animal", function(req, res) {
  var animal = req.params.animal.toLowerCase();  
  if(animal === "pig" || "cow" || "dog") {
    res.send("The " + animal + " says, '" + animalSound[animal] + "!'");
    } else {
      res.send("Sorry, page not found... What are you doing with your life?");
    }
})

// Visiting "/repeat/:phrase/:num" should print ":phrase" (repeated :num times)
app.get("/repeat/:phrase/:num", function(req, res) {
  var phrase = req.params.phrase + " ",
      num = Number(req.params.num);
  res.send(phrase.repeat(num));
  // console.log(phrase, num);
})

// Visiting any other page should print "Sorry, page not found... What are you doing with your life?"
app.get("*", function(req, res) {
  res.send("Sorry, page not found... What are you doing with your life?");
})

// Tell Express to listen for requests (start server)
app.listen(3000,process.env.IP, function() {
  console.log("Server has started");
});