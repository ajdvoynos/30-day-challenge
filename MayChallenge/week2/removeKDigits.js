// Remove K Digits
// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  //Find if we can remove leading 0's
  var startIndex = 0;
  do {
    var found0 = false;
    for (var i = startIndex, countk = 0; i < num.length && countk <= k; i++) {
      if (num[i] == '0') {
        found0 = true;
      } else {
        if (found0) break;
        countk++;
      }
    }
    if (found0) {
      startIndex = i;
      k -= countk;
    }
  } while (found0 && k)

  if (!k || startIndex == num.length) return num.substring(startIndex) || '0';

  num = [...num.substring(startIndex)];

  do {
    var prev = 1;
    var found = false;
    for (let i = 0; i < num.length; i++) {
      //Remove the first "peak" in value
      if (num[i] < prev) {
        found = true;
        num.splice(i-1,1);
        k--;
        break;
      }

      prev = num[i];
    }
    if (!found && k) {
      //If no peaks found, remove last k elements
      //No peaks means that the elements are in ascending order
      num.splice(k*-1)
      k = 0;
    }
  } while (k);

  return num.join('') || '0';

};

export default removeKdigits;