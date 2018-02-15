// Setup mongoose and its schema
var mongoose = require("mongoose"),
		// Designate the data that will be stored in each 'post'
		userSchema = new mongoose.Schema({
			email: String,
			name: String,
			posts: [
				{type: mongoose.Schema.Types.ObjectId, ref: "Post"}
			]
		});

// Create the mongoose model and export it for use by other files (also, creates the 'posts' mongoDB collection)
module.exports = mongoose.model("User", userSchema);