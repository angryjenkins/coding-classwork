var fs = require('fs');

var action = process.argv[2];
var value = process.argv[3];

switch(action){
    case 'total':
        total();
        break;
    case 'deposit':
        deposit();
        break;
    case 'withdraw':
        withdraw();
        break;
    case 'lotto':
        lotto();
        break;
}

function total(){
    fs.readFile('./bank.txt', "utf8", function(err, data){
        data = data.split(', ');
        var result = 0;

        for (var i = 0; i < data.length; i++){
            result+= parseFloat(data[i]);
        }

        console.log("You have a total of " + result.toFixed(2));
    });
}

function deposit(){
    fs.appendFile('bank.txt', ", " + value);

    console.log("Deposited " + value + ".");
}

function withdraw(){
    fs.appendFile('bank.txt', ", -" + value);

    console.log("Withdrew " + value + ".");
}

function lotto(){
    fs.appendFile('bank.txt', ", -.25");

    var chance = Math.floor((Math.random() * 10) + 1);

    console.log(chance);

    if (chance === 1){
        fs.appendFile('bank.txt', ", 2");
        console.log("Congrats you won the lottery!");
    } else{
        console.log("Deposited .25...... You did not win.");
    }
}