var mongoose = require("mongoose"),
		Post = require("./models/post"),
		User = require("./models/user");
									 
mongoose.connect("mongodb://localhost/blog_demo_2");

Post.create(
	{title: "How to cook the best burger... part 4", content: "Yum Yum!"},
	function(err, newPost) {
		User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
			if(err){
				console.log(err);
			} else {
				foundUser.posts.push(newPost._id);
				foundUser.save(function(err, userData){
					if(err) {
						console.log(err);
					} else {
						console.log(userData);
					}
				});
			}
		});
	}
)



