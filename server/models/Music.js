var mongoose = require('mongoose');

var MusicSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	singer: {
		type: String,
		require: true
	},
	url: {
		type: String,
		require: true
	}
});

module.exports = MusicSchema;