var batman = {
name: 'bruce wayne',
car: 'batmobile',
sidekick: 'Robin',
enemies: ['joker', 'poison ivy', 'superman', 'bats'],
fight: function() {
  return batman.sidekick + '! To the batmobile!';
},
curseEnemy: function(enemy) {
  return 'Curse you ' + enemy + '!';
},
breakCar: function() {
  return "Check engine light for " + batman.car + "!";
},
changeSidekick: function(name) {
  batman.sidekick = name;
},
changeCar: function(carName) {
  batman.car = carName;
}
};

batman.changeCar("Buick Century");
console.log(batman.breakCar());
