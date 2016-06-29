// // Case 1 - Small Set of Numbers

var arr = [];

for (var i=0, t=40; i<t; i++) {

	var random_number = Math.round(Math.random() * t);
    arr.push(random_number);
}

console.log("arr: ", arr);


var sortedArr = [];

// arr.min = function( arr ){
//     return Math.min.apply( Math, arr );
// };


for(i=0;i<arr.length;i++){
	var minimum = Number(Math.min(arr));
	sortedArr.push(minimum);

	var index = arr.indexOf(minimum);
	arr.splice(index);

}

console.log("sortedArr: ", sortedArr);

//hint - swap function will change two indices back and forth.