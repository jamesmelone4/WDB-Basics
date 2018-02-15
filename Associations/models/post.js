// Setup mongoose and its schema
var mongoose = require("mongoose"),
		// Designate the data that will be stored in each 'post'
		postSchema = new mongoose.Schema({
			title: String,
			content: String
		});

// Create the mongoose model and export it for use by other files (also, creates the 'posts' mongoDB collection)
module.exports = mongoose.model("Post", postSchema);