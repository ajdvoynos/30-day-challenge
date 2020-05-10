import assert from "assert";
import checkStraightLine from "../week7/straightLine.js";
import isPerfectSquare from "../week7/validPerfectSquare.js";
import findJudge from "../week7/findTownJudge.js";

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
  describe('Perfect square', function () {
    it('Should solve example 1', function () {
      var input = 16;
      var expected = true;
      var actual = isPerfectSquare(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = 14;
      var expected = false;
      var actual = isPerfectSquare(input);
      assert.equal(actual, expected);
    });
  });
  describe('Find town judge', function () {
    it('Should solve example 1', function () {
      var input = [2, [[1,2]]];
      var expected = 2;
      var actual = findJudge(...input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = [3, [[1,3],[2,3]]];
      var expected = 3;
      var actual = findJudge(...input);
      assert.equal(actual, expected);
    });
    it('Should solve example 3', function () {
      var input = [3, [[1,3],[2,3],[3,1]]];
      var expected = -1;
      var actual = findJudge(...input);
      assert.equal(actual, expected);
    });
    it('Should solve example 4', function () {
      var input = [3, [[1,2],[2,3]]];
      var expected = -1;
      var actual = findJudge(...input);
      assert.equal(actual, expected);
    });
    it('Should solve example 5', function () {
      var input = [4, [[1,3],[1,4],[2,3],[2,4],[4,3]]];
      var expected = 3;
      var actual = findJudge(...input);
      assert.equal(actual, expected);
    });
    
  });

});