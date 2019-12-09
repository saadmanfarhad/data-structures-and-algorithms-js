// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var revString = '';
  var len = str.length;

  for(var i = len-1 ; i >= 0 ; i--){
    revString += str[i];
  }

  return revString;
}

module.exports = reverse;
