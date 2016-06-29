var arr = [];

for (var i=0, t=40; i<t; i++) {

	var random_number = Math.round(Math.random() * t);
    arr.push(random_number);
}

console.log("arr: ", arr);

function inspect(){

	var len = arr.length;

	for(var i=0;i<arr.len;i++){
		if(arr[i] < arr[i+1]){
			swap(arr,i,i+1);
		}
	}
}

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

console.log("arr after sort: ", arr);