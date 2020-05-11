/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

export default function (nums) {
  var maxSum = nums[0];
  var reduced = nums.reduce((acc, curr) => {
    if(acc > maxSum) maxSum = acc;
      
    if(curr < 0 && curr > acc || acc < 0) return curr;
    
    return acc+curr;
  });

  return maxSum > reduced ? maxSum : reduced ;

};