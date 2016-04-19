// Dependencies
var http = require('http');
var url = require('url');

// Define port
var PORT = 8080;

// Create server
var server = http.createServer(handleRequest);

// Create our handleRequest functionality
function handleRequest(req, res){

	// Use the parse method that is ing on portin the URL package
	var url_parts = url.parse(req.url);

	res.end("It worked awesomely!!! Path Hit: " + req.url);

	console.log(url_parts);
}

server.listen(PORT, function(){
	console.log("Server is listening on PORT: " + PORT);
})
