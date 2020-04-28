// Maximal Square
// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4


/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function (matrix) {
  if(matrix.length == 0) return 0;
  var sumMatrix = [];
  var largestSquare = 0;
  for (let i = 0; i < matrix.length; i++) {
    sumMatrix[i] = [Number(matrix[i][0])];
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) sumMatrix[i][j] = sumMatrix[i][j - 1] + 1;
      else sumMatrix[i][j] = 0;
    }
  }
  for (let j = sumMatrix[0].length -1; j >= 0 + largestSquare; j--) {
    var count = 0;
    for (let i = 0; i < sumMatrix.length; i++) {
      var n = sumMatrix[i][j];
      if (n > largestSquare) {
        if(++count > largestSquare){
          largestSquare = count;
          i = -1;
          count = 0;
          continue;
        }
      } else {
        count = 0;
      }
    }
  }
  return largestSquare * largestSquare;
}

export default maximalSquare;

// var maximalSquare = function (matrix) {
//   var subSequence = function (start, end){
//     this.start = start;
//     this.end = end;
//     this.length = () => this.end - this.start + 1;
//     this.move = () => this.end++;
//   }
//   if(matrix.length == 0) return 0;
//   var w = matrix[0].length;
//   var h = matrix.length;
//   var largestSquare = 0;
//   var rows = [];
//   for (let i = 0; i < matrix.length; i++) {
//     rows[i] = [];
//     //For each row, store startIndex and endIndex
//     var subSeq = null;
//     for (let j = 0; j <= matrix[0].length; j++) {
//       if(matrix[i][j] == 1){
//         if(largestSquare == 0) largestSquare = 1;
//         if(subSeq == null){
//           subSeq = new subSequence(j,j);
//         }else{
//           subSeq.move();
//         }
//       }else{
//         if(subSeq){
//           if(subSeq.length() > 1) rows[i].push(subSeq);
//           subSeq = null;
//         }
//       }
//     }
//   }

//   for (let i = 0; i < rows.length - largestSquare; i++) {
//     const row = rows[i];
//     for (let j = 0; j < row.length; j++) {
//       deep(row[j], i, 1);
//     }
//   }

//   function deep(seq, index, depth){
//     if(seq.length() >= depth && depth > largestSquare){
//       largestSquare = depth;
//     }
//     if(seq.length() <= largestSquare || index+1>=rows.length)return;
//     var subsBelow = rows[index+1].filter(x=> x.start >= seq.start || x.end <= seq.end).map(x=> new subSequence(Math.target(x.start, seq.start), Math.min(x.end, seq.end)));
//     subsBelow.forEach(sub => {
//       deep(sub, index + 1, depth + 1);
//     });
//   }
//   return largestSquare*largestSquare;

//   // var diagonals = new Map();
//   //Traverse diagonally, crazy ideas XD
//   // var i = h - 2;
//   // var j = 0;
//   // while(i < h && j < h){
//   //   var i2 = i;
//   //   var j2 = j;
//   //   var sum = 0;
//   //   while (i2 < h && j2 < w) {
//   //     if(matrix[i2][j2] == 1){
//   //       sum++;
//   //       if(largestSquare == 0) largestSquare = 1;
//   //     }
//   //     console.log(i2,j2);
//   //     i2++;
//   //     j2++;
//   //   }
//   //   if(i > 0){
//   //     i--
//   //   } else{
//   //     j++
//   //   }
//   // }


// };

