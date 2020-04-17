// Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
export default function (grid) {
  var set = new Set();
  var islands = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      var key = getkey(i, j);
      if (set.has(key)) continue;
      if (grid[i][j] == 1) {
        //mark adjacent 1s
        mark1s(i, j)
        islands++
      }
    }
  }
  function mark1s(i, j) {
    //search left right up and down and add them to set
    var key = getkey(i, j)
    if (set.has(key)) return;
    set.add(key);

    if (grid[i + 1] && grid[i + 1][j] == 1) mark1s(i + 1, j)

    if (grid[i - 1] && grid[i - 1][j] == 1) mark1s(i - 1, j)

    if (grid[i][j + 1] == 1) mark1s(i, j + 1)

    if (grid[i][j - 1] == 1) mark1s(i, j - 1)
  }

  function getkey(i, j){
    return i + '-' + j;
  }

  return islands;
};