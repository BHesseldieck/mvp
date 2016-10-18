var request = require('request');
var path = require('path');
var db = require(path.join(__dirname + '/db/mongo'));
var helper = require(path.join(__dirname + '/helpers/utilities'));

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

exports.loginUser = function(req,res){
	var username = req.body.username;
	var pw = req.body.password;

	User.findOne({username: username})
		.then(function(user){
			if(!user){
				res.redirect('/login');
			} else {
				user.comparePassword(pw, function(match){
					if(match){
						helper.createSession(req,res,user);
					} else {
						res.redirect('/login');
					}
				})
			}
		})
}

exports.signUpUser = function(req,res){
	var username = req.body.username;
	var pw = req.body.password;

	User.findOne({username: username}).then(function(user){
		if(user){
			console.log('User exists already')
			res.redirect('/');
		} else {
			var newUser = new User({
				username: username,
				password: pw
			})
			newUser.save().then(function(user){
				helper.createSession(req,res,newUser);
			})
		}
	})
}

exports.logoutUser = function(req,res){
	req.session.destroy(function(){
		res.redirect('/login');
	});
}
















