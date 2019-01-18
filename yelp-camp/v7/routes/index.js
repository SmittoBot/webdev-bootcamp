var express = require("express");
var passport = require("passport");
var User = require("../models/user");
var router = express.Router();

// Root route
app.get("/", function(req, res){
  res.render("landing");
});

// Register form route
router.get("/register", function(req, res){
  res.render("register");
});

// Handle sign up logic
router.post("/register", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/campgrounds");
    });
  });
});

// Login form route
router.get("/login", function(req, res){
  res.render("login");
});

// Handle login logic
router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res){
});

// Logout route
router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/campgrounds");
});

// Middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
};

module.exports = router;
