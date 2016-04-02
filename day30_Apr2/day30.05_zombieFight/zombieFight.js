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

console.log(player['health']);

prompter.start();


prompter.get([{
    name: 'guessDmg',
    required: true,
    description: 'guess a number from 2 to 5.'
  }], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  guessDmg: ' + result.guessDmg);
  console.log('  randomDmg: ' + parseInt(randomDmg));

  if(result.guessDmg == randomDmg){
    var playerLife = player['health'] - randomDmg;
    console.log(playerLife);

  } else {
    var zombieLife = zombie['health'] - randomDmg;
    console.log(zombieLife);
  }

  return;
});
