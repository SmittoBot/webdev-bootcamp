var express = require("express");
var app = express();

function pickWord(animal){
  var sounds = {
    pig: "oink",
    cow: "moo",
    dog: "woof",
    beeb: "get schlorfed on",
    chad: "sports!"
  };
  return sounds[animal];
};

app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal.toLowerCase();
  res.send("The " + animal + " says '" + pickWord(animal) + "'");
});

app.get("/repeat/:word/:times", function(req, res){
  var word = req.params.word + " ";
  var times = req.params.times;
  res.send(word.repeat(times));
});

app.get("/", function(req, res){
  res.send("Welcome to my based site");
});

app.get("*", function(req, res){
  res.send("Page not found, what's wrong with you. Why are you here. What to do hope to accomplish");
});

// Tell Exprss to listen for requests (start server)
app.listen(3000, function(){
  console.log("Server has started");
});
