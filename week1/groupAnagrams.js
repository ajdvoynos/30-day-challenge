// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

export default function(strs) {
    let result = new Map();
    let letters = new Map();
    Array.from("abcdefghijklmnopqrstuvwxyz").forEach((element, i) => {
      letters.set(element, Math.pow(2, i));
    });
    
    const reducer = (acc, curr) => acc ^ letters.get(curr);
    for (let i = 0; i < strs.length; i++) {
      const element = strs[i];
      const hash = Array.from(new Set(element)).reduce(reducer, 0); //Initialize new set to remove duplicates XD
      if(result.has(hash)){
        result.get(hash).push(element);
      } else{
        result.set(hash, [element]);
      }
    }

    return Array.from(result.values());
    
};