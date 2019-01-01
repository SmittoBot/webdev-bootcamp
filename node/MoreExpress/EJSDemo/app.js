var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/love/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "The unbelievable secrets of beasting", author: "TonySwagBeast"},
    {title: "I'm a depressed failure!", author: "Nathan"},
    {title: "Why I should stop watching anime", author: "Matt Facts"}
  ];

  res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function(){
  console.log("Server is listening");
});
