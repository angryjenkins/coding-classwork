var Twitter = require('twitter');

var subject = process.argv[2]

var client = new Twitter({
  consumer_key: 'ykW7lgMUFThqz5IL4q5ScI7Ss',
  consumer_secret: 'vvZ3YB54OozPZvquxlKVkONVspn6Dzj1wDBnK6XFvSZxyzCuxo',
  access_token_key: '733105861-FaINs5DuUaEz1leoqgmEHpYFkWryaSpDy3NBVA7F',
  access_token_secret: '0Jlu8gQbkYp2RYWEEIY8LmRowfcLoR0e0BXC9McqVLOsK'
});

client.stream('statuses/filter', {track: subject, lang: 'en'},  function(stream){
  stream.on('data', function(tweet) {
    console.log("@" + tweet.user.screen_name + " ::: " + tweet.text);
    console.log('****');
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
