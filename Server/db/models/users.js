var db = require('./../mongo');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


//currently working without salt, maybe rework that
db.usersSchema.pre('save', function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.get('password'), null, null).bind(this)
  .then(function(hash) {
    this.set('password', hash);
    next();
  });
});

//bcrypt.compare should be reworked to a promise for consistency
db.usersSchema.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};

var User = mongoose.model('user', db.usersSchema);

module.exports = User;