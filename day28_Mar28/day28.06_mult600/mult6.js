console.log(process.argv);

var addThese = [];

function multiples(x,y){
	var x = parseInt(process.argv[2]);
	var y = parseInt(process.argv[3]);
	var sum = 0;

	for(i=0;i<y;i+=x){
		sum += i;
		addThese.push(i);
	}

	console.log(addThese);
	console.log(sum);
}

multiples();