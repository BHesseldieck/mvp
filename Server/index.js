const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var db = require(path.join(__dirname + '/db/mongo'));

var app= express();

var port = 3100;
var ip = '127.0.0.1';

app.use(bodyParser.json());
// app.use(Session({
//   secret: 'HR48_MVP',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));

app.use(express.static(path.join(__dirname + './../client/public')));

require('./routes.js')(app, express);

app.listen(port, ip, function(){
	console.log('Listening on http://' + ip + ':' + port);
});

module.exports = app;