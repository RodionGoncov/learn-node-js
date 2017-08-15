var User = require('./user');

function run() {
  var petya = new User('Петя');
  var vasya = new User('Вася');
  vasya.hello(petya);
}
if(module.parents) {
  exports.run = run;
} else {
  run();
}
