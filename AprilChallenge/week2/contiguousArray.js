// Contiguous Array
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function (nums) {
  //O(n) solution after reading it in leetcode
  var map = new Map();
  map.set(0, -1);
  var counter = 0;
  var maxWidth = 0;
  for (let i = 0; i < nums.length; i++) {
    counter += nums[i] ? 1 : -1;
    if(!map.has(counter)){
      map.set(counter, i);
    } else{
      maxWidth = Math.max(maxWidth, i - map.get(counter));
    }
  }
  return maxWidth;
};