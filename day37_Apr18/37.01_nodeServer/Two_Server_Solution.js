// Incorporated the http node package 
var http = require('http');

// Define a port that we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

// Created the code that handles requests and responses
function handleRequest1(request, response){
	// Here we say what the response will be. 
	// The response will be text is displayed along with the url
	response.end("It worked awesomely!!! Path Hit: " + request.url);
}

// Created the code that handles requests and responses
function handleRequest2(request, response){
	// Here we say what the response will be. 
	// The response will be text is displayed along with the url
	response.end("It worked badly!!! Path Hit: " + request.url);
}

// Created the server. Tell the server to use handleRequest as its "functionality"
var server1 = http.createServer(handleRequest1); 
var server2 = http.createServer(handleRequest2); 

// Let's start our server
server1.listen(PORT1, function(){
	// When the server is first run. Display this text. 
	console.log("Server is now listening on: http://localhost:%s", PORT1);
})

server2.listen(PORT2, function(){
	// When the server is first run. Display this text. 
	console.log("Server is now listening on: http://localhost:%s", PORT2);
})

