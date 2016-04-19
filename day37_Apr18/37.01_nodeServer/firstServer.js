var http = require('http');

var PORT = 8080;
//every server has multiple "ports" openings available to listen to.
//8080 is a useful one to have.

function handleRequest(request, response){
  response.end("It worked!!!  Path Hit:  " + request.url);
}

//Above function will handle requests and responses.
//In this instance, it gets a http request and response with a confirmation and the url of the request.

//Function is useless until you call it, so let's call it!

var server = http.createServer(handleRequest);

//Above we create the server to use andleRequest as its "functionality.


// Tell the server to listen , ....
server.listen(PORT,function(){
  console.log("Server is now listening on http://localhost:%s",PORT)
});


// %s gets replaced with the PORT.
