var express = require("express");
var request = require("request");
var app = express();

app.get("/results", function(req, res){
  request("http://omdbapi.com/?s=miyazaki&apikey=thewdb", function(error, response, body){
    if(!error && response.statusCode == 200) {
      var results = JSON.parse(body);
      res.send(results["Search"][0]["Title"]);
    }
  });
});

app.listen(3000, function(){
  console.log("Server has started");
});
