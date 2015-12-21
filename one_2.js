var path = require('path');
var fs = require('fs');
var _ = require('underscore');


var text = fs.readFileSync(path.join(__dirname, '1.md'), {encoding: 'utf8'});

//console.log(text);



var iterate = function iterate (character) {
  createHistory(upOrDown(character));
}

var upOrDown = function upOrDown (direction) {
    return direction == '(' ? floor += 1 : floor -= 1;
}


var createHistory = function createHistory (floor) {
  history.push(floor);
}

var history = [];
var floor = 0;
_.forEach(text, iterate);
console.log('Santa needs to go to floor ' + floor);
console.log('Santa entered the basement at position ' + (_.indexOf(history, -1) + 1));

	  