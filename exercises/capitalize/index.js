// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var strArray = str.split(' ');
  var resArray = [];

  for(var i = 0 ; i < strArray.length ; i++){
    var st = strArray[i][0].toUpperCase();
    for(var j = 1 ; j < strArray[i].length ; j++){
      st = st + strArray[i][j];
    }
    // strArray[i][0] = strArray[i][0].toUpperCase();
    // console.log(strArray[i][0].toUpperCase());
    resArray.push(st);
  }

  str = resArray.join(' ');
  console.log(str);
  return str;
}

module.exports = capitalize;
