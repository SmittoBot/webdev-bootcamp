var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
  title: "How to do anything pt. 4",
  content: "Acquire EVEN MORE swag"
}, function(err, post){
  User.findOne({email: "big@boi.swag"}, function(err, foundUser){
    if(err){
      console.log(err);
    } else {
      foundUser.posts.push(post);
      foundUser.save(function(err, data){
        if(err){
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
});
