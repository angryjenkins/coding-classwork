<!DOCTYPE html>
<html>
<head>
<title> ex 1</title>
<style>
ul{
	list-style-type: none;
}
</style>
<body>
<ul></ul>
<script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
<script>
var animals = ['turkey', 'chicken','tuna','cow'];

for(i=0;i<animals.length; i++){
console.log(animals[i]);
	$('ul').append("<li><button type='submit'data-animals='"+animals[i]+"' id='"+animals[i]+"'>"+animals[i]+"</button></li>");
	 $('button').on('click', function() {
            var animal = $(this).data('animals');
            alert(animal);
            
        });

}


</script>
</body>
</html>