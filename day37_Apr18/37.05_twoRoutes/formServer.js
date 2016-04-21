// dependencies
const http = require('http');
const url = require('url');

// Define port
const PORT = 8080;

// create server
var server = http.createServer(handleRequest);
var requestData = '';


// create the handleRequest functionality
function handleRequest(req, res) {

	var method = req.method.toLowerCase();

	req.on('data', function(data){
		requestData += data;
	});

	req.on('end', function(){
		output = 'You just ' + method + '\n';
		output += requestData.toString();
		console.log(output);
		res.end();
	});

	// user the parse method available from the URL package
	var url_parts = url.parse(req.url);

	// switch statements to control how our site loads
	switch(url_parts.pathname){
		case '/':
			display_root(url_parts.pathname, req, res);
			break;

		case '/post':
			display_post(url_parts.pathname, req, res);

		default:
			display_404(url_parts.pathname, req, res);
	}

	// Create the functions that net our results
	function display_root(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body>';
		myHTML += '<h1>FORM!</h1>';
		myHTML += '<form  method="post">';
		myHTML += '<input type="text" name="firstname" placeholder="First Name"><br>';
		myHTML += '<input type="text" name="lastname" placeholder="Last Name"><br>';
		myHTML += '<input type="submit" value="SUBMIT">';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myHTML);
	}

	function display_post(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body>';
		myHTML += '<h1>thanks for your submission,' + requestData + '!</h1>';

		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myHTML);
	}

	function display_404(url, req, res){
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.write('<h1>404 NOT FOUND</h1>');
		res.end("The page you were looking for (" + url+ ") cannot be found");
	}
}

server.listen(PORT, function(){
	console.log("Server is listening on PORT: " + PORT);
})