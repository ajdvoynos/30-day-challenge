// Jewels and Stones
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

// Hint #1  
// For each stone, check if it is a jewel.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  //Maybe try ordering S first?
  //Would allow to do only 1/2 checks each iteration
  
  //Ordered time complexity would be O(n)?
  var orderedJ = Array.from(J).map(x=> x.charCodeAt()).sort(((a,b)=> a - b));
  var orderedS = Array.from(S).map(x=> x.charCodeAt()).sort(((a,b)=> a - b));
  var count = 0;
  var currentJ = orderedJ.shift();
  for (let i = 0; i < orderedS.length; i++) {
    if(currentJ == orderedS[i]){
      count++;
    } else{
      if(currentJ < orderedS[i]){
        currentJ = orderedJ.shift();
        i--; //retry this S
        if(!currentJ) break;
      }
    }
  }

  return count;

  // Time complexity below is O(m^n)
  // var jewels = new Set(Array.from(J));
  // var sum = Array.prototype.reduce.apply(S, [(acc,curr) => jewels.has(curr) ? ++acc : acc, 0])
  // return sum;
};

export default numJewelsInStones;