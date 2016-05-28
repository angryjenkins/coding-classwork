$(document).ready(function(){


	

	var source = $('#languages-template').html();
	// var second_source = $('#language_list').html();
	var template = Handlebars.compile(source);
	// var second_template = Handlebars.compile(second_source);
	var second_source = $('.list').html();
	var second_template = Handlebars.compile(second_source);


	//our data
	var context = {
		title: "Programming Skills",
		languages:[
			{name : "HTML"},
			{name : "CSS"},
			{name : "JavaScript"}
		]
	}

	
	var second_html = second_template(context);
	$('.list').html(second_html);

	//compiling our data to be used by html
	var el_html = template(context);
	//appending data to our html
	$('#data_to_change').html(el_html);

	
});
