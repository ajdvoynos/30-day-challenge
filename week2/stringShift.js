// Perform String Shifts
// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// Example 1:

// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:  
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"


// Constraints:

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
export default function (s, shift) {
  // var map = new Map();
  // var letters = 'abcdefghijklmnopqrstuvwxyz';
  // for (let i = 0; i < letters.length; i++) {
  //   map.set(letters[i], Math.pow(2, i));
  // }
  //minimize number of shifts by adding them together
  var shifts = shift.reduce((acc,curr) => curr[0] == 0 ? acc-= curr[1] : acc+=curr[1], 0);
  if(Math.abs(shifts) > s.length){
    shifts = shifts % s.length;
  }
  if(shifts < 0){
    //left shift
    //remove the first character of s and append it to the end
    shifts = Math.abs(shifts);
    s = s.slice(shifts) + s.slice(0, shifts);
  }else{
    
    //right shift
    //remove the last character of s and add it to the beginning
    s = s.slice(s.length - shifts, s.length) + s.slice(0, s.length - shifts);
  }
  return s;
};