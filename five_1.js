var path = require('path');
var fs = require('fs');
var _ = require('underscore');

var text = chomp(fs.readFileSync(path.join(__dirname, '5.md'), {encoding: 'utf8'}));
var lines = text.split('\n');

var vowelsRegex = '[aeiou]';

// greets http://3dmdesign.com/development/chomp-for-javascript
function chomp(raw_text) {
  return raw_text.replace(/(\n|\r)+$/, '');
}

var containsThreeVowels = function containsThreeVowels(txt) {
  var vowelCount = 0;
  var vowelLog = '';
  
  // iterate thru letters in this line
  // return true if line contains 3 or more vowels
  return _.find(txt, function(value, key, list) {
    if (value.match(vowelsRegex)) {
      vowelCount += 1;
      vowelLog += value;
      //console.log('voewl detection: ', value, ' count ', vowelCount);
      if (vowelCount >= 3) {
        //console.log('vowel log ', vowelLog);
        return true;
      }
      return false;
    }
    
  });
}

var containsDoubleLetter = function containsDoubleLetter(txt) {
  
}

var containsNoBlacklist = function containsNoBlacklist(txt) {
  
}


var isNice = function isNice(txt) {
  console.log(txt);
  if (containsThreeVowels(txt)) {
    console.log('line ', txt, ' contains three vowels');
    
    if (containsDoubleLetter(txt)) {
      if (containsNoBlacklist(txt)) {
        return true;
      }
    }
  }
  return false;
}

var niceList = _.filter(lines, isNice);