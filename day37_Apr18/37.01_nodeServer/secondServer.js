var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response){
  response.end("It worked GOOD!!!  Path Hit:  " + request.url);
}

function handleRequest2(request, response){
  response.end("It worked BAD!!!  Path Hit:  " + request.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//Above we create the server to use andleRequest as its "functionality.


// Tell the server to listen , ....
server1.listen(PORT1,function(){
  console.log("Server is now listening on http://localhost:%s",PORT1);
  console.log("You're a blessing to society.");
});

server2.listen(PORT2,function(){
  console.log("Server is now listening on http://localhost:%s",PORT2);
  console.log("You are an imbecile, and will be the death of us all!");
});
