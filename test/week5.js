import assert from 'assert'
import maxPathSum from '../week5/binaryTreeMaximumPathSum.js';
import { ArrayToBinaryTree } from '../week2/binaryTreeDiameter.js';
import isValidSequence from '../week5/validSequenceToLeavesBinaryTree.js';

describe('Week5', function () {
  describe('Binary Tree Maximum Path Sum', function () {
    it('Should solve example 1', function () {
      var input = ArrayToBinaryTree([1,2,3]);
      var expected = 6;
      var actual = maxPathSum(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = ArrayToBinaryTree([-10,9,20,null,null,15,7]);
      var expected = 42;
      var actual = maxPathSum(input);
      assert.equal(actual, expected);
    });
    it('Should handle 1 negative element tree', function () {
      var input = ArrayToBinaryTree([-3]);
      var expected = -3;
      var actual = maxPathSum(input);
      assert.equal(actual, expected);
    });
    it('Should handle right side path only', function () {
      var input = ArrayToBinaryTree([1,-2,3]);
      var expected = 4;
      var actual = maxPathSum(input);
      assert.equal(actual, expected);
    });
    it('Should handle yet another weird scenario :)', function () {
      var input = ArrayToBinaryTree([9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6]);
      var expected = 16;
      var actual = maxPathSum(input);
      assert.equal(actual, expected);
    });
    it('Should handle yet another weird scenario 2', function () {
      var input = ArrayToBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
      var expected = 48;
      var actual = maxPathSum(input);
      assert.equal(actual, expected);
    });
  });
  describe('Valid sequence from root to leaf', function () {
    it('Should solve example 1', function () {
      var input = [ArrayToBinaryTree([0,1,0,0,1,0,null,null,1,0,0]), [0,1,0,1]];
      var expected = true;
      var actual = isValidSequence(...input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = [ArrayToBinaryTree([0,1,0,0,1,0,null,null,1,0,0]), [0,0,1]];
      var expected = false;
      var actual = isValidSequence(...input);
      assert.equal(actual, expected);
    });
    it('Should solve example 3', function () {
      var input = [ArrayToBinaryTree([0,1,0,0,1,0,null,null,1,0,0]), [0,1,1]];
      var expected = false;
      var actual = isValidSequence(...input);
      assert.equal(actual, expected);
    });
  });
});