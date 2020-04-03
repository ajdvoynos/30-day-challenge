import assert from "assert";
import happy from './../week1/happy.js';
import maxSubarray from './../week1/maximumSubarray.js';
describe('Week1', function(){
  describe('happy', function(){
    it('should return true for 7', function(){
      assert.equal(happy(7), true);
    })
  });

  /*
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  Example:

  Input: [-2,1,-3,4,-1,2,1,-5,4],
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.
  */
  describe('MaximumSubarray', function() {
    it('should return 6', function(){
      var input = [-2,1,-3,4,-1,2,1,-5,4];
      assert.equal(maxSubarray(input), 6)
    });
    
  });
});
