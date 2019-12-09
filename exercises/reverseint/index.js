// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var rem;
  var revInt = 0;

  while (n){
    rem = n % 10;
    revInt = revInt * 10 + rem;
    n = parseInt(n / 10);
    // n = n / 10;
    console.log(n);
  }

  return revInt;
}

module.exports = reverseInt;
