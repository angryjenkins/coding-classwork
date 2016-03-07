
var animals = ["dog","cat","fish","duck"];

for(i=0;i<animals.length;i++){
	var animalButton = $('<li><button class="btn btn-default">' + animals[i] + '</li?</button>')
	
	animalButton.attr("data-type",animals[i]);

	$('#animals').append(animalButton);
}