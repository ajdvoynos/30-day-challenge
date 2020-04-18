// Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function(grid) {
    var minLength = Infinity;
    var traversedNodes = new Map();
    move(0,0,0);
    function move(x,y,accWeight){
      accWeight += grid[x][y];
      if(x < grid.length - 1) move(x + 1, y, accWeight); //move down
      if(y < grid[0].length -1 ) move(x, y + 1, accWeight); //move right
      // traversedNodes.set(x+','+y, accWeight);
      if(x == grid.length - 1 && y == grid[0].length - 1){
        minLength = Math.min(accWeight, minLength);
      }
      return accWeight;
    }
    return minLength;
};