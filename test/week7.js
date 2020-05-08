import assert from "assert";
import checkStraightLine from "../week7/straightLine.js";

describe('Week7', function () {
  describe('Straight Line', function () {
    it('Should solve example 1', function () {
      var input = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
      var expected = true;
      var actual = checkStraightLine(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];
      var expected = false;
      var actual = checkStraightLine(input);
      assert.equal(actual, expected);
    });
    it('Should handle parallel lines!', function () {
      var input = [[1,1],[2,2],[2,1],[3,2]];
      var expected = false;
      var actual = checkStraightLine(input);
      assert.equal(actual, expected);
    });
    
  });  
});