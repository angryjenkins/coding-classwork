// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS CONFIGURATION
var app = express(); // Tells node that we are creating an "express" server
var port = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// This lets us serve content from the 'public' folder
var staticContentFolder = __dirname + '/app/public';
app.use(express.static(staticContentFolder));  

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ROUTER
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


// LISTENER
app.listen(port, function() {
    console.log("App 'calculator' listening on PORT: %s", port);
});