// Incorporated the http node package 
var http = require('http');

// Define a port that we want to listen to
var PORT = 8080;

// Created the code that handles requests and responses
function handleRequest(request, response){
	// Here we say what the response will be. 
	// The response will be text is displayed along with the url
	response.end("It worked!!! Path Hit: " + request.url);
}

// Created the server. Tell the server to use handleRequest as its "functionality"
var server = http.createServer(handleRequest); 

// Let's start our server
server.listen(PORT, function(){
	// When the server is first run. Display this text. 
	console.log("Server is now listening on: http://localhost:%s", PORT);
})

