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
    
    for (let i = 0; i < strs.length; i++) {
      const element = strs[i];
      
      const hash = Array.from(element).sort().reduce((acc,curr) => acc + curr, '');
      if(result.has(hash)){
        result.get(hash).push(element);
      } else{
        result.set(hash, [element]);
      }
    }

    return Array.from(result.values());
    
};