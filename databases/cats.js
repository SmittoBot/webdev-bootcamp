var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var garfield = new Cat({
  name: "Garfield",
  age: 100,
  temperament: "Swag"
});

garfield.save(function(err, cat){
  if(err){
    console.log("Something went wrong");
  } else {
    console.log("Saved cat to db:");
    console.log(cat);
  }
});

Cat.create({
  name: "Nermal",
  age: 1,
  temperament: "trash"
}, function(err, cat){
  if(err){
    console.log(err);
  } else {
    console.log(cat);
  }
});

Cat.find({}, function(err, cats){
  if(err){
    console.log("Error:");
    console.log(err);
  } else {
    console.log("All cats:");
    console.log(cats);
  }
});
