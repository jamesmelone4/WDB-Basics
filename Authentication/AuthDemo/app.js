//=============  SETUP  ================
var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    passportLocal           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    User                    = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")( {
  secret:"Boomer Sooner",
  resave: false,
  saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new passportLocal(User.authenticate()));


//============  ROUTES  ================

//************** MAIN ******************
app.get("/", function(req, res){
  res.render("home");
})
//define middleware function to confirm user is logged in before redirecting them to the secret page
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}
//in the following, 'passport.authenticate...' is an example of "middleware"
app.get("/secret", isLoggedIn, function(req, res){
  res.render("secret");
})


//************* REGISTER ***************
app.get("/register", function(req, res){
  res.render("register");
})
app.post("/register", function(req, res){
  User.register(new User({username: req.body.username}), req.body.password, function(err, newUser){
    if(err){
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secret");
    })
  })
})


//*********** LOGIN/LOGOUT *************
app.get("/login", function(req, res){
  res.render("login");
})
//in the following, 'passport.authenticate...' is an example of "middleware"
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
  }), function(req, res){
});
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
})


//==========  START SERVER  ============
app.listen(3000, process.env.IP, function(){
  console.log("Server started...")
})