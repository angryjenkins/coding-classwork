var http = require('http');
var url = require('url');

// Define a port
var PORT = 7500;

//create server
var server = http.createServer(handleRequest);

function handleRequest(req,res){
  var url_parts = url.parse(req.url);
};

server.listen(PORT,function(){
  console.log("the server is listening on PORT: %s", PORT);
});
