const path = require('path');
var db = require(path.join(__dirname + '/db/mongo'));
var handler = require('./reqhandler');

module.exports = function(app, express) {

  var restrict = function (req, res, next) {
    if (req.session.user) {
      next();
    } else {
      req.session.error = 'Access denied!';
      res.redirect('/login');
    }
  };

  // app.get('/signup', handler.);
  app.post('/signup', handler.signUpUser);

  app.post('/login', handler.loginUser);
  app.get('/logout', handler.logoutUser);

  app.get('/data', handler.fetchAll);
  app.post('/voting/*', handler.registerLike);

  // app.get('/voting/language',  restrict, handler.);
  // app.post('/voting/language', restrict, handler.);

  // app.get('/voting/dbs', restrict, handler.);
  // app.post('/voting/dbs', restrict, handler.);

  // app.get('/voting/orm', restrict, handler.);
  // app.post('/voting/orm', restrict, handler.);

  // app.get('/voting/backend', restrict, handler.);
  // app.post('/voting/backend', restrict, handler.);

  // app.get('/voting/frontend/', restrict, handler.);
  // app.post('/voting/frontend/', restrict, handler.);

  // app.get('/ranking', handler.);

};