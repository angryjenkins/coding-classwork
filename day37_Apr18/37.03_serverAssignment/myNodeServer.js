var http  = require('http');
var url   = require('url');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

	// Use the parse method that is available from the URL package
  console.log(req.url);
	var url_parts = url.parse(req.url);

	// Various switch statements
	switch(url_parts.pathname){
		case '/':
			display_root(url_parts.pathname, req, res);
			break;

		case '/food':
			display_food(url_parts.pathname, req, res);
			break;

    case '/movies':
			display_movies(url_parts.pathname, req, res);
			break;

    case '/frameworks':
			display_frameworks(url_parts.pathname, req, res);
			break;

		default:
			display_404(url_parts.pathname, req, res);
	}

	// Create functions that get triggered
	function display_root(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body><h1>Home</h1>';
    myHTML += "<a href='/food'>Favorite Food</a>";
    myHTML += " || ";
    myHTML += "<a href='/movies'>Favorite Movies</a>";
    myHTML += " || ";
		myHTML += "<a href='/frameworks'>Favorite CSS Frameworks</a>";
		myHTML += '</body></html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myHTML);
	}

  function display_food(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body><h1>Favorive Food!</h1>';
    myHTML += '<ol><li>pizza</li><li>chocolate</li><li>french fries</li></ol>'
		myHTML += "<a href='/'>Go Home</a>";
		myHTML += '</body></html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myHTML);
	}

  function display_movies(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body><h1>Favorive Movies!</h1>';
    myHTML += '<ol><li>shawshank redemption</li><li>mad max:fury road</li><li>Swingers</li></ol>'
		myHTML += "<a href='/'>Go Home</a>";
		myHTML += '</body></html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myHTML);
	}

  function display_frameworks(url, req, res){
		var myHTML = '<html>';
		myHTML += '<body><h1>Favorive CSS Frameworks!</h1>';
    myHTML += '<ol><li>Bootstrap</li><li>Foundation</li><li>Material</li></ol>'
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
