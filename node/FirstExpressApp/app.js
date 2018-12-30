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

app.get("/r/:subredditName", function(req, res){
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
  res.send("Welcome to the comments page");
});

app.get("*", function(req, res){
  res.send("You are a star!");
});

// Tell Exprss to listen for requests (start server)
app.listen(3000, function(){
  console.log("Server has started");
});
