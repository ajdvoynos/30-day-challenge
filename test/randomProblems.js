import assert from 'assert';
import twoSum from '../randomProblems/twoSum.js';

describe('randomProblems', function () {
  describe('twoSum', function () {
    it('should handle basic scenario', function () {
      var input = [[2, 7, 11, 15], 9];
      var expected = [0, 1];
      assert.deepEqual(twoSum(...input), expected);
    })

    it('should handle 2 elements array', function () {
      var input = [[3, 3], 6];
      var expected = [0, 1];
      assert.deepEqual(twoSum(...input), expected);
    })

    it('should handle basic scenario 2', function () {
      var input = [[2, 5, 5, 11], 10];
      var expected = [1, 2];
      assert.deepEqual(twoSum(...input), expected);
    })

    it('should handle 0 target -.-', function(){
      var input = [[0, 4, 3, 0], 0];
      var expected = [0, 3];
      assert.deepEqual(twoSum(...input), expected);
    })

    it('should handle negative numbers', function(){
      var input = [[-1, -2, -3, -4, -5], -8];
      var expected = [2, 4];
      assert.deepEqual(twoSum(...input), expected);
    })

    it('should not try to use the same element twice >.>', function(){
      var input = [[1, 3, 4, 2], 6];
      var expected = [2, 3];
      assert.deepEqual(twoSum(...input), expected);
    })
  });
});