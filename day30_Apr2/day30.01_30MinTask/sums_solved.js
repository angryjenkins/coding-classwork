var args = process.argv.slice(2);
var returnArray = [];


var addAllBut = function (c){
    var total = 0;

    for(var b = 0; b < args.length; b++){

        if (b != c){
            total += parseFloat(args[b]);
        }
    }

    return total;
}

for(var i = 0; i < args.length; i++){
    returnArray.push(addAllBut(i));
}

console.log(process.argv);
console.log(args);

console.log(returnArray);
