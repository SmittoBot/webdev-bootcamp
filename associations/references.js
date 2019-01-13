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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

var User = mongoose.model("User", userSchema);

// User.create({
//   email: "big@boi.swag",
//   name: "Tonyyy"
// });

// Post.create({
//   title: "How to do anything",
//   content: "Acquire swag"
// }, function(err, post){
//   console.log(post);
// });

// Post.create({
//   title: "How to do anything pt. 3",
//   content: "Acquire MORE swag"
// }, function(err, post){
//   User.findOne({email: "big@boi.swag"}, function(err, foundUser){
//     if(err){
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data){
//         if(err){
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });

User.findOne({email: "big@boi.swag"}).populate("posts").exec(function(err, user){
  if(err){
    console.log(err);
  } else {
    console.log(user);
  }
});
