import assert from "assert";
import maxSubarraySumCircular from "../week3/maximumSumCircularSubArray.js";

describe('Week3', function () {
  describe('Maximum sum circular subarray', function () {
    it('Should solve example 1', function () {
      var input = [1,-2,3,-2];
      var expected = 3;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = [5,-3,5];
      var expected = 10;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 3', function () {
      var input = [3,-1,2,-1];
      var expected = 4;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 4', function () {
      var input = [3,-2,2,-3];
      var expected = 3;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 5', function () {
      var input = [-2,-3,-1];
      var expected = -1;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should handle use case 96', function () {
      var input = [2,-2,2,7,8,0];
      var expected = 19;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should handle 1 element array', function () {
      var input = [-2];
      var expected = -2;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should handle use case 80', function () {
      var input = [8,-1,-3,8,-6,-9,2,4];
      var expected = 18;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should handle use case 84', function () {
      var input = [0,5,8,-9,9,-7,3,-2];
      var expected = 16;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should handle use case 83', function () {
      var input = [-5,3,5];
      var expected = 8;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should handle use case 85', function () {
      var input = [3,1,3,2,6];
      var expected = 15;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
    it('Should handle use case 87', function () {
      var input = [-5,-2,5,6,-2,-7,0,2,8];
      var expected = 14;
      var actual = maxSubarraySumCircular(input);
      assert.equal(actual, expected);
    });
  });
});