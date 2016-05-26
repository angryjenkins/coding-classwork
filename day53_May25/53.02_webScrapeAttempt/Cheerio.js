var request = require('request');
var cheerio = require('cheerio');


request('https://www.deadspin.com', function (error, response, html) {

  var $ = cheerio.load(html);
  var result = [];

  // for each <p> with class "title" ......
  $('h1.headline').each(function(i, element){

      var title = $(this).text();
      var link = $(this).children().attr('href');
      
      result.push({
        title:title,
        link:link
      });


    });
  console.log(result);
});
