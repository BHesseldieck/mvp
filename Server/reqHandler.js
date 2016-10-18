var request = require('request');
var path = require('path');
var db = require(path.join(__dirname + '/db/mongo'));

var User = require('./db/models/users');
var Technologies = require('./db/models/technologies');


exports.fetchAll = function(req, res){
	Technologies.find().then(function(data){
		res.status(200).json(data);
	});
}

exports.registerLike = function(req, res){
	var newLikes = req.body.likes + 1;
	Technologies.findOneAndUpdate({name: req.body.name}, {$set: {likes: newLikes}}, {new: true}, function(err, newObj){
		console.log(newObj);
	});
}