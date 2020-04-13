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
  if (!nums.length) return 0;
  //Starting over! >.>

  var ones = nums.reduce((acc, curr) => acc + curr);
  var zeroes = nums.length - ones;
  var maxLength = Math.min(ones, zeroes) * 2;
  var minLength = Math.min(ones, zeroes) / 1.5;
  if(minLength == 0) return 0;
  for (let arraySize = maxLength; arraySize >= minLength; arraySize-=2) {
    var targetSum = arraySize / 2;
    var result = nums.slice(0, arraySize).reduce((acc,curr) => acc+curr);
    for (let j = arraySize; (j < nums.length && result != targetSum); j++) {
      result += nums[j];
      result -= nums[j-arraySize];
    }
    if(result == targetSum) return result * 2;
  }
  return 0; //If we got this far, return 0
};