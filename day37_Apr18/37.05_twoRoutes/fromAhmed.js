//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(function(req, res) {
  var method = req.method.toLowerCase();
  var requestData = '';

  req.on('data', function(data) {
    requestData += data;
  });

  req.on('end', function() {
    console.log("ENDED");
    output = 'You just ' + method + '\n';
    output += requestData;
    console.log(output);
    res.end();
  });

});

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});