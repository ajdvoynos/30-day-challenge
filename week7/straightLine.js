// Check If It Is a Straight Line
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length == 2) return true;

  var initialSlope = getSlope(coordinates[0], coordinates[1]);
  for (let i = 2; i < coordinates.length; i++) {
    var p2 = coordinates[i];
    var slope = getSlope(coordinates[0], p2);
    if (Math.abs(slope) != Math.abs(initialSlope)) return false;
  }
  //If we made it this far return true
  return true;

  function getSlope(p1, p2) {
    try {
      return (p2[1] - p1[1]) / (p2[0] - p1[0]);
    } catch (error) {
      //Vertical slope is undefined 🤷‍♂️
      return undefined;
    }
  }
};

export default checkStraightLine;