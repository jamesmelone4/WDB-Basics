var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

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
		{type: mongoose.Schema.Types.ObjectId, ref: "Post"}
	]
});
var User = mongoose.model("User", userSchema);

// User.create(
// 	{email: "bob@gmail.com", name: "Bob Belcher"}
// );

// Post.create(
// 	{title: "How to cook the best burger... part 3", content: "jibberish"},
// 	function(err, newPost) {
// 		User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 			if(err){
// 				console.log(err);
// 			} else {
// 				foundUser.posts.push(newPost._id);
// 				foundUser.save(function(err, userData){
// 					if(err) {
// 						console.log(err);
// 					} else {
// 						console.log(userData);
// 					}
// 				});
// 			}
// 		});
// 	}
// )


User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, foundUser){
	if(err) {
		console.log(err);
	} else {
		console.log(foundUser);
	}
})