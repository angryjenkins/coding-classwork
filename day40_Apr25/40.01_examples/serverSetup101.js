// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
var app = express(); // Tells node that we are creating an "express" server
var port = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener
// ==============================================================================
// This lets us serve content from the 'public' folder
// ==============================================================================
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));     

// set the static files location /public/img will be /img for users// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ==============================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ==============================================================================


// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(port, function() {
    console.log("App listening on PORT: " + port);
});