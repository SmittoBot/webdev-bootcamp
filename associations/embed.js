var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true});

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//   email: "beast@mode.com",
//   name: "BigBoi Beast Mode"
// });
//
// newUser.posts.push({
//   title: "How to get big",
//   content: "Use your swag"
// });
//
// newUser.save(function(err, user){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Reflections on Swag",
//   content: "swag"
// });
//
// newPost.save(function(err, post){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "BigBoi Beast Mode"}, function(err, user){
  if(err){
    console.log(err);
  } else {
    user.posts.push({
      title: "How to acquire swag",
      content: "Be Tony"
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
