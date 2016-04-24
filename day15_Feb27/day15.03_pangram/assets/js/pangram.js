
// $('button#addItem').click(addTask);

// //wen pressing enter
// $('input').keypress(function(event){
// 	if(event.which == 13){
// 		addTask();
// 	}
// });

// $(document).on('click','.minusItem', removeTask);

// function addTask(){
// 	var task = $('input').val();
// 	console.log(task);
// 	$("#toDo").append("<li>" + task + " <button class='btn btn-sm btn-default minusItem pull-right'>X</button>");
// };

// function removeTask(){
// 	$(this).closest('li').remove();
// };



//input and save the string to examine.

//examine each letter in the string to see if the alphabet is used.
var lettersUsed = [];

$('button').click(letterCollect);

$('input').keypress(function(event){
	if(event.which == 13){
		letterCollect();
	}
});


function letterCollect(){
	var phrase = $('input').val();
	console.log(phrase);

	for(i=0;i<phrase.length;i++){
		if(lettersUSed.indexOf(phrase[i]); != -1){
			lettersUsed.toLowerCase().push(phrase[i]);
		}
	};

	if (lettersUsed.length != 26){
		$("#result").html("this is NOT a pangram");
	} else {
		$("#result").html("this IS a pangram");
	};

};

