
$('#addItem').click(addTask);

//wen pressing enter
$('input').keypress(function(event){
	if(event.which == 13){
		addTask()
	}
});

$(document).on('click','.minusItem', removeTask);

function addTask(){
	var task = $('input').val();
	console.log(task);
	$("#toDo").append("<li>" + task + " <button class='btn btn-sm btn-default minusItem pull-right'>X</button>");
};

function removeTask(){
	$(this).closest('li').remove();
};




// function addToDo (){
// 	var item = String($("#newtask").val);
// 	$("#addItem").click(function(){
// 		$("#toDo").append("<li>" + item + "<button class='btn btn-sm btn-default minusItem pull-right'>X</button>");
// 	});
// };

// function removeItem(){
// 	var thisItem = $(this).closest("<li>");
// 	$(".minusItem").click(function(){
// 		thisItem.addClass('hidden');
// 	});
// };

// $(document).ready(function(){
// 	addToDo();
// 	removeItem();
// });