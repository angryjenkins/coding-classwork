// Dependencies
var http = require('http');
var url = require('url');

// Define port
var PORT = 8000;

// Create servere
var server = http.createServer(handleRequest);

// Create our handleRequest functionality
function handleRequest(req, res){

	// Use the parse method that is available from the URL package
	var url_parts = url.parse(req.url);

	// Various switch statements 
	switch(url_parts.pathname){
		case '/':
			display_root(url_parts.pathname, req, res);
			break;
		
		case '/portfolio':
			display_portfolio(url_parts.pathname, req, res);
			break;

		case '/edit':
			sys.puts("display edit");
			break;

		default:
			display_404(url_parts.pathname, req, res); 
	}

	// Create functions that get triggered
	function display_root(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body><h1>Home Page</h1>';
		myHTML += "<a href='/portfolio'>Portfolio</a>";
		myHTML += '</body></html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myHTML);
	}

	function display_portfolio(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body><h1>My Portfolio</h1>';
		myHTML += "<a href='/'>Go Home</a>";
		myHTML += '</body></html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myHTML);
	}

	function display_404(url, req, res){
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.write('<h1>404 NOT FOUND</h1>');
		res.end("The page you were looking for: " + url + " cannot be found");
	}
}

server.listen(PORT, function(){
	console.log("Server is listening on PORT: " + PORT);
})