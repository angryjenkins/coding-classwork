
// Animals Array
	var characters = ["Ross", "Walt", "Randy", "Robert"]

	// Loop through array
	for (var i = 0; i < characters.length; i++) {
		
		// Creates the buttons
		$("#showButtons").append("<li><button id=" +characters[i]+">"+characters[i]+"</button></li>");

	}