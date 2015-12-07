var path = require('path');
var _ = require('underscore');
var fs = require('fs');

var directions = fs.readFileSync(path.join(__dirname, '3.md'), 'utf8');
directions = directions.split('');


// pseudo code of what needs to happen in this script
//   make a coordinate system
//   start at 0, 0
//   create a history array of each visited coordinate
//   do all the movements told to us by the elves
//   go through the history array, counting each unique coordinate as +1


//
// # FUNKIES
//
var calculateCoordinate = function calculateCoordinate(direction) {
  if (direction == '^') currentCoordinate[1] += 1;
  if (direction == '>') currentCoordinate[0] += 1;
  if (direction == 'v') currentCoordinate[1] -= 1;
  if (direction == '<') currentCoordinate[0] -= 1;
  return
}


var createHistory = function createHistory(coordinate) {
  return history.push([currentCoordinate[0], currentCoordinate[1]]);
}

var move = function move(direction) {
  calculateCoordinate(direction);
  createHistory(currentCoordinate);
}

var mergeCoordinates = function mergeCoordinates(coordinates) {
  // hack to make string comparable coordinates.
  // ex: turns [0, -3] into '0,-3'
  return ''+coordinates[0]+','+coordinates[1];
}


//
// # RUNNER
//

// prep for iteration
// (prep for elf giving orders by setting original coords)
// (and creating travel history array)
var currentCoordinate = [0, 0];
var history = [];


// iterate through directions (elf giving orders)
_.each(directions, move);
//console.log('Santa visited ' + history.length + ' houses');

// count the unique coordinates
var uniqueHouses = _.unique(history, false, mergeCoordinates).length;
console.log('Santa visited ' + uniqueHouses + ' unique houses');