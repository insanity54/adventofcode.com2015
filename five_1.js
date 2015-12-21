var path = require('path');
var fs = require('fs');
var _ = require('underscore');

var text = chomp(fs.readFileSync(path.join(__dirname, '5.md'), {encoding: 'utf8'}));
var lines = text.split('\n');

var vowels = 'aeiou';

// greets http://3dmdesign.com/development/chomp-for-javascript
function chomp(raw_text) {
  return raw_text.replace(/(\n|\r)+$/, '');
}

var containsThreeVowels = function containsThreeVowels(txt) {
  var 
  _.forEach(txt, function(value, key, list) {
    
  }
}

var containsDoubleLetter = function containsDoubleLetter(txt) {
  
}

var containsNoBlacklist = function containsNoBlacklist(txt) {
  
}


var isNice = function isNice(txt) {
  console.log(txt);
  if (containsThreeVowels(txt)) {
    if (containsDoubleLetter(txt)) {
      if (containsNoBlacklist(txt)) {
        return true;
      }
    }
  }
  return false;
}

var niceList = _.filter(lines, isNice);