var path = require('path');
var _ = require('underscore');
var fs = require('fs');


var text = fs.readFileSync(path.join(__dirname, '2.md'), 'utf8');
var lines = text.split('\n');
//console.log(lines);


var removeBlanks = function removeBlanks(line) {
  return (line !== '');
}

var calculateArea = function calculateArea(dimensionLine) {
  //console.log('line- ' + dimensionLine);
  var l = dimensionLine[0];
  var w = dimensionLine[1];
  var h = dimensionLine[2];
  return (2 * l * w) + (2 * w * h) + (2 * h * l);
}

var getDimensions = function getDimensions(line) {
  //console.log(line);
  return line.split('x');
}

var sumArea = function sumArea(memo, value) {
  //console.log('summing memo=' + memo + ' and value=' + value);
  return memo + value;
}

var calculateSlack = function calculateSlack(dimensions) {
  var l = dimensions[0];
  var w = dimensions[1];
  var h = dimensions[2];
  
  // get one of the areas of each face pair
  var faceAs = [];
  faceAs[0]  = l * w; // top
  faceAs[1] = w * h;  // front
  faceAs[2]  = h * l; // side

  // face with smallest area is the slack
  return _.min(faceAs);
}

var log = function(val) {
  console.log(val);
}


var totalArea = 0;

// get dimentions
var dimensions = _.chain(lines)
  .filter(removeBlanks)
  .map(getDimensions)
  .value();


// get slack areas
var slackAreas = _.chain(dimensions)
  .map(calculateSlack)
  .value();
var slackAreaTotal = _.reduce(slackAreas, sumArea)
console.log('slack area total is ' + slackAreaTotal);


// get box areas
var boxAreas = _.chain(dimensions)
  //.tap(log)
  .map(calculateArea)
  //.tap(_.reduce());
  .value();
var boxAreaTotal = _.reduce(boxAreas, sumArea);
console.log('box area total is ' + boxAreaTotal);


// add box and slack areas

var total = sumArea(boxAreaTotal, slackAreaTotal);
console.log('The elves will need ' + total + ' square feet of paper.');
