// Valid Parenthesis String
// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// Example 1:
// Input: "()"
// Output: True

// Example 2:
// Input: "(*)"
// Output: True

// Example 3:
// Input: "(*))"
// Output: True

// Note:
// The string size will be in the range [1, 100].

/**
 * @param {string} s
 * @return {boolean}
 */
export default function (s) {
  var firstPass = traverse(s);
  if (!firstPass) return false;

  var switchAndBait = Array.from(s).reverse().map(x => x == '(' ? ')' : x == ')' ? '(' : '*').join('');
  var secondPass = traverse(switchAndBait);
  if (!secondPass) return false;

  if (firstPass.leftCount == 0) return true;
  if (secondPass.leftCount == 0) return true;
  if (firstPass.leftCount - firstPass.leftStars <= 0) return true;
  if (secondPass.leftCount - secondPass.leftStars <= 0) return true;
  //Otherwise return false
  return false;

  function traverse(s) {
    var leftCount = 0;
    var leftStars = 0;
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case '(':
          leftCount++;
          break;
        case '*':
          leftStars++;
          break;
        case ')':
          if (leftCount > 0) {
            leftCount--;
          } else if (leftStars > 0) {
            leftStars--;
          } else {
            return false;
          }
          break;
        default:
          throw 'fuck this shit im out'
      }
    }
    return { leftCount, leftStars };
  }

};