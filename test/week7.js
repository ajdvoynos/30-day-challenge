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
    it('Should handle vertical lines', function () {
      var input = [[4,1],[4,2],[4,3],[4,4]];
      var expected = true;
      var actual = checkStraightLine(input);
      assert.equal(actual, expected);
    });
    it('Should handle parallel vertical lines', function () {
      var input = [[4,1],[4,2],[4,3],[7,1],[7,2],[7,3]];
      var expected = false;
      var actual = checkStraightLine(input);
      assert.equal(actual, expected);
    });
    it('Should handle horizontal', function () {
      var input = [[1,4],[2,4],[3,4],[4,4]];
      var expected = true;
      var actual = checkStraightLine(input);
      assert.equal(actual, expected);
    });
    it('Should handle parallel horizontal lines', function () {
      var input = [[1,4],[2,4],[1,8],[2,8]];
      var expected = false;
      var actual = checkStraightLine(input);
      assert.equal(actual, expected);
    });
    
  });  
});