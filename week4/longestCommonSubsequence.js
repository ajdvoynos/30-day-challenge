// Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.



// If there is no common subsequence, return 0.



// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// // The input strings consist of lowercase English characters only.
// Hint #1  
// Try dynamic programming. DP[i][j] represents the longest common subsequence of text1[0 ... i] & text2[0 ... j].
// Hint #2  
// DP[i][j] = DP[i - 1][j - 1] + 1 , if text1[i] == text2[j] DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]) , otherwise

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  var map = new Map();
  return recursiveSum(text1, text2);
  
  function recursiveSum(sub1, sub2) {
    if(map.has(sub1 + ',' + sub2)) return map.get(sub1 + ',' + sub2);
    
    if(sub1.length == 0 || sub2.length == 0) return 0;

    //Check last letter and continue moving left from there
    if(sub1[sub1.length-1] == sub2[sub2.length-1]){
      var sum = recursiveSum(sub1.substring(0, sub1.length-1), sub2.substring(0, sub2.length-1)) + 1;
      map.set(sub1 + ',' + sub2, sum);
      return sum;
    }else{
      //didnt match, so try removing one from one side, and from the other side
      var sum1 = recursiveSum(sub1.substring(0,sub1.length-1),sub2);
      var sum2 = recursiveSum(sub1,sub2.substring(0,sub2.length-1));
      map.set(sub1.substring(0,sub1.length-1) + ',' + sub2, sum1);
      map.set(sub1 + ',' + sub2.substring(0,sub2.length-1), sum2);
      return Math.max(sum1,sum2);
    }
  }
};

export default longestCommonSubsequence;