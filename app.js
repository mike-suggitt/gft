var express = require('express');
var http = require('http');
var path = require('path');

var routes = require('./routes/index');

var app = express();
var exphbs  = require('express-handlebars');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use('/', routes);


var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(7080);

module.exports = app;
