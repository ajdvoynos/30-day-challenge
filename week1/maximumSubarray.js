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

  var maxSum;
  var negativeIndexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0)
      negativeIndexes.push(i);
    if (maxSum == undefined || nums[i] > maxSum)
      maxSum = nums[i];
  }

  if (negativeIndexes.length == 0) {
    //Everything is positive, just sum all elements
    return nums.reduce((acc, curr) => acc + curr, 0);
  }

  for (let i = 0; i < negativeIndexes.length; i++) {
    let sum = 0;
    let index = negativeIndexes[i];

    for (let j = index + 1; j < nums.length && sum >= 0; j++) {
      sum += nums[j] //Sum next element until the sum is negative

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
};