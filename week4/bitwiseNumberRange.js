// Bitwise AND of Numbers Range
// Solution
// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4
// Example 2:

// Input: [0,1]
// Output: 0
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export default function (m, n) {
  if (m == 0) return 0;
  if (m == n) return m;

  //Find left most bit for n
  for (var leftIndex = 0; n >> leftIndex > 0; leftIndex++);

  //Find how many left most bits they have in common
  for (var bitsInCommon = 0; m >> (leftIndex - bitsInCommon) == n >> (leftIndex - bitsInCommon); bitsInCommon++);

  //Shift m for the difference back and forth (to clear any one's on right hand side)
  return m >> leftIndex - (bitsInCommon - 1) << leftIndex - (bitsInCommon - 1);
};