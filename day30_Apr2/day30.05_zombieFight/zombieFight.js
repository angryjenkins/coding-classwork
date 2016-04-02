var prompter = require('prompt');

var randomDmg = Math.floor(Math.random() * 5) + 2;


var player = {
  health: 50,
  damage: randomDmg
}


var zombie = {
  health: 20,
  damage: randomDmg
}


prompter.start();


prompter.get([{
    name: 'guessDmg',
    required: true,
    description: 'guess a number from 1 to 6.'
  }], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  guess: ' + parseFloat(result.guessDmg));
  console.log('  damage: ' + randomDmg);

  if(result.guessDmg == randomDmg){
    var zombieLife = zombie['health'] - randomDmg;
    console.log('You attack for ' + randomDmg + ' damage!');
    console.log('Zombie Health: ' + zombieLife);

    var zombieLife = zombie['health'];

  } else {
    var playerLife = player['health'] - randomDmg;

    console.log('Zombie attacks you for ' + randomDmg + ' damage!');
    console.log('Your Health: ' + playerLife);

    var playerLife = player['health'];
  }

});
