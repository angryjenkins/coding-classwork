// Dependencies
var http = require('http');
var url = require('url');

// Define port
var PORT = 8080;

// Create server
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
}

server.listen(PORT, function(){
	console.log("Server is listening on PORT: " + PORT);
})
