// Dependencies
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

// Route
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Listener/Port
var port = process.env.PORT || 3000;
app.listen(port);
