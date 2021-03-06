// Valid Perfect Square
// Solution
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  for(var i=0;i<46341;i++){
      var sq=i*i;
      if(sq==num){
          return true;
      }else{
          if(sq >num){
              return false;
          }
      }
  }
      //made it this far return false
  return false;        
};

export default isPerfectSquare;