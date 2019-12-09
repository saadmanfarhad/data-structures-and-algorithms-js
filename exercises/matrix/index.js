// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let ar = [];
  let count = 0;

  for(let i = 0; i < n ; i++){
    let subAr = [];
    for(let j = 0 ; j < n ; j++){
      subAr.push(0);
    }
    ar.push(subAr);
  }

  let right = n, down = n, left = -1, up = 0, start = 0;
  while(count !== n*n){
    for(let i = start ; i < right ; i++){
      count += 1;
      ar[start][i] = count;
    }

    for(let i = up + 1 ; i < down ; i++){
      count += 1;
      ar[i][right-1] = count;
    }

    for(let i = right - 2 ; i > left ; i--){
      count += 1;
      ar[down-1][i] = count;
    }

    for(let i =  down-2; i > up ; i--){
      count += 1;
      ar[i][left+1] = count;
    }

    right -= 1;
    down -= 1;
    left += 1;
    up += 1;
    start += 1;
  }
  console.log(ar);
  return ar;
}

module.exports = matrix;
