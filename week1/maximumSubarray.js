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

export default function(nums) {
    var maxSum;
    for (let i = 0; i < nums.length; i++) {
      let start = 0;
      for (let end = i + 1; end <= nums.length; end++) {
        var sum = nums.slice(start,end).reduce((acc,curr) => acc + curr, 0);
        if(maxSum === undefined || sum > maxSum)
          maxSum = sum;
        start++;
      }
    }

    return maxSum;
};