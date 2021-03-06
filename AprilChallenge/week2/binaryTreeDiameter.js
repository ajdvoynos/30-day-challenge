// Diameter of Binary Tree
// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.


// Definition for a binary tree node.
export function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

export function ArrayToBinaryTree(arr) {
  var root = new TreeNode(arr[0]);
  var stack = [root];
  for (let i = 1; i < arr.length; i += 2) {
    var element = stack.pop();
    if (arr[i] != null) {
      element.left = new TreeNode(arr[i]);
      stack.splice(0, 0, element.left);
    }
    if (arr[i + 1] != null) {
      element.right = new TreeNode(arr[i + 1]);
      stack.splice(0, 0, element.right);
    }
  }
  return root;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
export default function (root) {
  var maxWidth = 0;
  if(root) depth(root);
  function depth(node) {
    var leftDepth = node.left == null ? 0 : depth(node.left) + 1;
    var rightDepth = node.right == null ? 0 : depth(node.right) + 1;
    maxWidth = Math.max(maxWidth, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth);
  }

  return maxWidth;
};