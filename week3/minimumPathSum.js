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
    var traversedNodes = new Map();
    return move();
    function move(x=0,y=0){
      if(traversedNodes.has(x+','+y)) return traversedNodes.get(x+','+y);
      var weightDown = null;
      var weightRight = null;
      if(x < grid.length - 1) weightDown = move(x + 1, y); //move down
      if(y < grid[0].length -1 ) weightRight = move(x, y + 1); //move right
      
      if(weightDown == null) weightDown = weightRight;
      if(weightRight == null) weightRight = weightDown;
      
      var nodeWeight = grid[x][y] + Math.min(weightDown, weightRight);
      traversedNodes.set(x+','+y, nodeWeight);
      return nodeWeight;
    }
};