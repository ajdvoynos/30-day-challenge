// Cousins in Binary Tree
// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Example 1:

// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Example 2:

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

// Example 3:

// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false


// Note:
// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  var depths = [];
  var parents = [];
  traverse(root, 0);
  function traverse(node, depth) {
    var left = node.left && node.left.val;
    var right = node.right && node.right.val;
    if (left == x || left == y || right == x || right == y) {
      depths.push(depth);
      parents.push(node.val);
    }else{
      if(left) traverse(node.left, depth + 1);
      if(right) traverse(node.right, depth + 1);
    }
  }

  return depths[0] == depths[1] && parents[0] != parents[1];
};

export default isCousins;