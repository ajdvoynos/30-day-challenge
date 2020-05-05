// First Unique Character in a String
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var map = new Map();
  for (let i = 0; i < s.length; i++) {
    var key = s[i].charCodeAt();
    if(map.has(key)){
      map.set(key, map.get(key) + 1);
    }else{
      map.set(key, 1);
    }
  }
  var resultChar = 0;
  for (var [key,val] of map) {
    if(val == 1){
      resultChar = key;
      break;
    } 
  }
  
  return !resultChar ? -1 : s.indexOf(String.fromCharCode(resultChar));
};

export default firstUniqChar;