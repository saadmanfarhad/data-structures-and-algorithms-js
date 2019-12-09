// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charMap = new Map();
  var strArray = str.split('');
  var max = -1;
  var maxChar = '';

  var cMap = {};

  for (let i = 0 ; i < strArray.length ; i++){
    if(cMap[strArray[i]]){
      cMap[strArray[i]] = cMap[strArray[i]] + 1;
    }
    else {
      cMap[strArray[i]] = 1;
    }
  }

  for(let key in cMap){
    if(cMap.hasOwnProperty(key)){
      if(cMap[key] > max){
        max = cMap[key];
        maxChar = key;
      }
    }
  }

  // for(var i = 0 ; i < strArray.length ; i++){
  //   if(charMap.has(strArray[i])){
  //     // console.log('yes '+ strArray[i]);
  //     var val = charMap.get(strArray[i]) + 1;
  //     charMap.set(strArray[i], val);
  //     console.log(charMap.get(strArray[i])+1);
  //   }
  //   else {
  //     charMap.set(strArray[i], 1);
  //   }
  // }
  //
  // console.log(charMap);
  //
  // for(const [k,v] of charMap){
  //   if(max < v){
  //     max = v
  //     maxChar = k;
  //   }
  // }

  return maxChar;
}

module.exports = maxChar;
