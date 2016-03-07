


var artist = $('#artist').val().toLowerCase();
var artist_url = "https://crossorigin.me/crossorigin.me/api.spotify.com/v1/search?q=u2&type=artist";
var track_url = "https://crossorigin.me/api.spotify.com/v1/search?q="+ artist.trim +"&type=track";
var player = '<iframe src="https://embed.spotify.com/?uri=spotify:track:'+playerResponse.tracks[0].id+'" frameborder="0" allowtransparency="true"></iframe>';
                    musicianDiv.append(player);

function render(){
	.ajax({url:artist_url,method:"GET"})
	.done(function(response){
		console.log(response.artists.items[0].id)
		// $("#results").append('<div class="col-md-12"> </div>')
	});
}
