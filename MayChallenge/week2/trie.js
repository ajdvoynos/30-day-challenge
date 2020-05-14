// Implement Trie (Prefix Tree)
// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.
function TrieNode(val) {
  this.val = val;
  this.children = new Map();
  this.isEnd = false;
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  var current = this.root;
  for (let i = 0; i < word.length; i++) {
    if(!current.children.has(word[i])){
      current.children.set(word[i], new TrieNode(word[i]));
    }
    current = current.children.get(word[i]);
    if(i == word.length - 1) current.isEnd = true;
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  var current = this.root;
  for (let i = 0; i < word.length; i++) {
    if(!current.children.has(word[i])) return false;
    current = current.children.get(word[i]);
    if(i == word.length - 1 && current.isEnd) return true;
  }
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  var current = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if(!current.children.has(prefix[i])) return false;
    current = current.children.get(prefix[i]);
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export default Trie;