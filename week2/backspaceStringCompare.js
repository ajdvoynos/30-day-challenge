// Backspace String Compare
// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
export default function(S,T){
  const reducer = (acc, curr) => curr == "#" ? acc.slice(0,-1) : acc.concat(curr);
  let s = Array.from(S).reduce(reducer, '');
  let t = Array.from(T).reduce(reducer, '');
  return s == t;
}