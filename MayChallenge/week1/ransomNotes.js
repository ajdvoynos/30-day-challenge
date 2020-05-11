// Ransom Note
// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var targetCount = ransomNote.length;
  var orderedNote = Array.from(ransomNote).map(x=> x.charCodeAt()).sort(((a,b)=> a - b));
  var orderedMagazine = Array.from(magazine).map(x=> x.charCodeAt()).sort(((a,b)=> a - b));
  var currentLetter = orderedNote.shift();
  var count = 0;
  for (let i = 0; i < orderedMagazine.length; i++) {
    if(currentLetter == orderedMagazine[i]){
      currentLetter = orderedNote.shift();
      count++;
      if(!currentLetter) break;
    } else{
      if(currentLetter < orderedMagazine[i]){
        return false;
      }
    }
  }
  return targetCount == count;
};

export default canConstruct;