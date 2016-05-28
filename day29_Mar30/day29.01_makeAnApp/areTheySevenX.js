// console.log(process.argv);

// var x = process.argv[2];
// var y = process.argv[3];

// function sevensCheck(x,y){
// 	if (x%7 === 0 && y%7 === 0){
// 		console.log('These are multiples of seven!');
// 	} else {
// 		console.log('These are NOT multiples of seven!');
// 	}
// }

// sevensCheck(x,y);


console.log(process.argv[2]%7 + process.argv[3]%7 === 0);