var http  = require('http');

var PORT = 8080;

var server = http.createServer(function(req,res){
var method = req.method.toLowerCase();
var requestData = '';

req.on('data',function(data){
  requestData += data;
});

req.on('end',function(){
  output = 'You just ' + method + '\n';
  output += requestData.toString();
});

server.listen(PORT, function(){
  console.log('Server listening on PORT %s', PORT);
})
