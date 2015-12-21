var path = require('path');
var _ = require('underscore');
var fs = require('fs');
var md5 = require('md5');


var input = fs.readFileSync(path.join(__dirname, '4.md'), 'utf8');


// psudo code
//   concat puzzle input number with number n
//   md5 concatted number
//   does md5 hash satisfy AdventCoin requirements?
//     (hash must start with 5 zeros)
//   if AdventCoin reqs satisfied
//     return with number n
//   if AdventCoin reqs not satisfied
//     let n = n + 1
//     try again

var n = 1;
var mineSatisfied = false;

var pickaxe = function pickaxe(number) {
  var mineString = '' + input + number;
  return md5(mineString);
}

var checkForCoin = function checkForCoin(earth) {
  console.log('checking ' + earth + ' for coin');
  if (
    earth[0] == 0 &&
    earth[1] == 0 &&
    earth[2] == 0 &&
    earth[3] == 0 &&
    earth[4] == 0
  )
  {
    return earth;
  }
  
  else {
    return false;
  }
}

while (!mineSatisfied) {
  var strikeResults = pickaxe(n);
  
  if (checkForCoin(strikeResults)) {
    console.log('good hash found! ' + strikeResults + ' the number was ' + n);
    mineSatisfied = true;
  }
  
  else {
    n += 1;
  }
}