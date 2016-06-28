var stuff = [];


var max_size = 1000000000;
var size = Math.ceil( Math.random() * max_size );
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];
var stuffCheck = stuff.indexOf(random_value);

function binarySearch(stuff, i) {
    var middle = Math.floor(stuff.length / 2);
    console.log(stuff[middle], i);

    if (stuff[middle] === i) {
        console.log('match', stuff[middle], i);
        return stuff[middle];
    } else if (stuff[middle] < i && stuff.length > 1) {
        console.log('middle lower', stuff[middle], i);
        binarySearch(stuff.splice(middle, Number.MAX_VALUE), i);
    } else if (stuff[middle] > i && stuff.length > 1) {
        console.log('middle higher', stuff[middle], i);
        binarySearch(stuff.splice(0, middle), i);
    } else {
        console.log('not here', i);
        return -1;
    }

}
var result = binarySearch(a, 100);
console.log("result: ", result);


// var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];


// Have students explain the code back to you.


//this will take 5 or 6 minutes, OR run out of memory!

