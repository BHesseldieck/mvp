var mongoose = require('mongoose');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

module.exports.db = mongoose.connect('mongodb://127.0.0.1:27017/THON');

mongoose.connection.once('connected', function() {
  console.log('Connected to database');
});

module.exports.usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  voted: Boolean,
}, {timestamps: true});

module.exports.technologiesSchema = new mongoose.Schema({
  name: String,
  imageSrc: String,
  category: String,
  likes: Number,
});

module.exports.usersSchema.pre('save', function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
  .then(function(hash) {
    this.set('password', hash);
    next();
  });
});

module.exports.usersSchema.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};