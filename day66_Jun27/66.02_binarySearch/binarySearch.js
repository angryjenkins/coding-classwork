var stuff = [];


var max_size = 10000000;
var size = Math.ceil( Math.random() * max_size );
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];
var stuffCheck = stuff.indexOf(random_value);


for( var j=0; j<size; j++ ){
    stuff.push( j+1 );
}


function binarySearch(stuff, i) {

    var middle = Math.floor(stuff.length / 2);

    console.log("your binary search:", i);
    console.log("The center of this search segment is: ", stuff[middle]);

    if (stuff[middle] === i) {
        console.log('match', stuff[middle], i);
        return stuff[middle];
    } else if (stuff[middle] < i && stuff.length > 1) {
        console.log(stuff[middle] + ' -- middle lower than ' + i);
        console.log('-----');

        binarySearch(stuff.splice(middle, Number.MAX_VALUE), i);
    } else if (stuff[middle] > i && stuff.length > 1) {
        console.log( stuff[middle] + ' -- middle higher than ' + i);
        console.log('-----');

        binarySearch(stuff.splice(0, middle), i);
    } else {
        console.log(i + ' is NOT in this set.');
        return -1;
    }
}

var result = binarySearch(stuff, 579);
// console.time('binarySearch');


// var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];


// Have students explain the code back to you.


//this will take 5 or 6 minutes, OR run out of memory!

