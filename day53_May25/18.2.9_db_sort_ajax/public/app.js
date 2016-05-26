$.getJSON('/all', function(data) {
  for (var i = 0; i<data.length; i++){
    $('#results').append('<tr><td>'+ data[i].name + '</td>' + '<td>'+ data[i].numlegs + '</td>' + '<td>'+ data[i].class + '</td>' + '<td>'+ data[i].weight + '</td>'+ '<td>'+ data[i].whatIWouldReallyCallIt + '</td></tr>');
  }
});


$('#weightsort').on('click', function(){
  $('#results').empty();
  $('#results').append("<tr><th>Name</th><th>Num Legs</th><th>Class</th><th id='active'>Weight</th><th>But I'd Call It...</th></tr>");
  $.getJSON('/weight', function(data) {
    for (var i = 0; i<data.length; i++){
      $('#results').append('<tr><td>'+ data[i].name + '</td>' + '<td>'+ data[i].numlegs + '</td>' + '<td>'+ data[i].class + '</td>' + '<td><b>'+ data[i].weight + '</b></td>'+ '<td>'+ data[i].whatIWouldReallyCallIt + '</td></tr>');
    }
  });
});

$('#namesort').on('click', function(){
  $('#results').empty();
  $('#results').append("<tr><th id='active'>Name</th><th>Num Legs</th><th>Class</th><th>Weight</th><th>But I'd Call It...</th></tr>");
  $.getJSON('/name', function(data) {
    for (var i = 0; i<data.length; i++){
      $('#results').append('<tr><td><b>'+ data[i].name + '</b></td>' + '<td>'+ data[i].numlegs + '</td>' + '<td>'+ data[i].class + '</td>' + '<td>'+ data[i].weight + '</td>'+ '<td>'+ data[i].whatIWouldReallyCallIt + '</td></tr>');
    }
  });
});
