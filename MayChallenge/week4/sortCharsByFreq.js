// Sort Characters By Frequency
// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:
// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var freq = Array.from(s).reduce((acc, curr) => {
    if (acc.has(curr)) {
      acc.set(curr, acc.get(curr) + 1)
    } else {
      acc.set(curr, 1);
    }
    return acc;
  }, new Map());
  return [...freq].sort((a, b) => b[1] - a[1]).map(x => x[0].repeat(x[1])).join('');
};

export default frequencySort;