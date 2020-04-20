// Construct Binary Search Tree from Preorder Traversal
// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
export function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

export function BinaryTreeToArray(rootNode) {
  if (!rootNode) return;
  var result = [];
  var stack = [rootNode];
  while (stack.length > 0) {
    var node = stack.shift()
    if(node.val == null && stack.length == 0) continue; //No need to add last null
    result.push(node.val);
    if (node.left == null && node.right == null) continue;
    if (node.left == null) stack.push(new TreeNode(null));
    else stack.push(node.left);
    if (node.right == null) stack.push(new TreeNode(null));
    else stack.push(node.right);
  }
  return result;
}

/**
 * @param {String} Node 
 * @return {TreeNode}
 */
export default function (preorder) {
  var i = 1;
  var numsWithoutRight = new Set();
  return traverse(preorder[0])
  function traverse(curr, prev) {
    if (i > preorder.length) return null;
    var node = new TreeNode(curr);
    
    if (preorder[i] < curr) {
      numsWithoutRight.add(curr);
      node.left = traverse(preorder[i++], curr);
    }
    numsWithoutRight.delete(curr);
    if (preorder[i] > curr) {
      if(preorder[i] < Math.min(...numsWithoutRight)){
        node.right = traverse(preorder[i++])
      }
    }
    return node;
  }
}
