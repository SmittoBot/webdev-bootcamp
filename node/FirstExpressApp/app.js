var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  res.send("Bye!");
});

app.get("/cat", function(req, res){
  res.send("Meow");
});

// Tell Exprss to listen for requests (start server)
app.listen(3000, function(){
  console.log("Server has started");
});
