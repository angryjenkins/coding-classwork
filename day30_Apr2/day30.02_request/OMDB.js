function getMovieInfo(){
  var query = process.argv[2];

  var request = require('request');
  var queryURL = 'https://www.omdbapi.com/?type=movie&t=' + query + '&plot=short&r=json';
  // sample request api call
  // var request = require('request');
  request.get(queryURL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          var movieData = JSON.parse(response.body);
          console.log(movieData);
      }
  });

}

getMovieInfo();
