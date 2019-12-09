// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var strA = {}, strB = {};
  stringA = stringA.replace(/[^\w]/g,'').toLowerCase();
  stringB = stringB.replace(/[^\w]/g,'').toLowerCase();

  var len, str;

  for(var i = 0; i < stringA.length ; i++){
    if(!strA[stringA[i]]){
      strA[stringA[i]] = 1;
    }
    else {
      strA[stringA[i]]++;
    }
  }

  for(var i = 0; i < stringB.length ; i++){
    if(!strB[stringB[i]]){
      strB[stringB[i]] = 1;
    }
    else {
      strB[stringB[i]]++;
    }
  }

  if(stringA.length > stringB.length){
    len = stringA.length
    str = stringA;
  }
  else {
    len = stringB.length;
    str = stringB;
  }

  for(var i = 0 ; i < len ; i++){
    if(strA[str[i]] !== strB[str[i]]){
      return false;
    }
  }

  return 'True';
}

module.exports = anagrams;
