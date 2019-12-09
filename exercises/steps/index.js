// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0) {
  // for(let i = 1 ; i <= n ; i++){
  //   let str = '';
  //
  //   for(let j = 1 ; j <= i ; j++){
  //     str = str + '#';
  //   }
  //
  //   for(let j = 1 ; j <= n-i ; j++){
  //     str += ' ';
  //   }
  //
  //   console.log(str);
  // }
  if (n === row){
    return;
  }
  let str = '';
  for(let i = 0 ; i < n ; i++){
    if(i > row){
      str += ' '
    }
    else {
      str += '#';
    }
  }
  console.log(str);
  steps(n, row+1);
}

module.exports = steps;
