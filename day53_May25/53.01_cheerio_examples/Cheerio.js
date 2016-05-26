var request = require('request');
var cheerio = require('cheerio');


request('https://www.reddit.com/r/kubuntu', function (error, response, html) {

  var $ = cheerio.load(html);
  var result = [];

  // for each <p> with class "title" ......
  $('p.title').each(function(i, element){

      var title = $(this).text();
      var link = $(element).children().attr('href');
      
      result.push({
        title:title,
        link:link
      });


    });
  console.log(result);
});
