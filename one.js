var path = require('path');
var fs = require('fs');
var _ = require('underscore');


var text = fs.readFileSync(path.join(__dirname, '1.md'), {encoding: 'utf8'});

//console.log(text);


var upOrDown = function upOrDown (direction) {
    return floor += 1 ? direction == '(' : floor -= 1;
}


var floor = 0;
_.forEach(text, upOrDown);
console.log('all done. floor is ' + floor);


	  