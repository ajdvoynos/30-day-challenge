import assert from "assert";
import productOfArray from "../week3/productOfArray.js";
import validParenthesis from "../week3/validParenthesis.js";
import numberOfIslands from "../week3/numberOfIslands.js";
import minimumPathSum from "../week3/minimumPathSum.js";
import searchRotatedSortedArray from "../week3/searchRotatedSortedArray.js";
import { ArrayToBinaryTree } from "../week2/binaryTreeDiameter.js";
import constructBst, { BinaryTreeToArray } from "../week3/constructBst.js";
import leftmostColumnWithOne from "../week3/leftmostColumnWithOne.js";

describe('Week3', function(){
  describe('productOfArray', function(){
    it('should resolve basic scenario', function(){
      var input = [1,2,3,4];
      var expected = [24,12,8,6];
      var actual = productOfArray(input);
      assert.deepEqual(actual, expected);
    });
    it('should resolve basic scenario2', function(){
      var input = [4,3,2,1,2];
      var expected = [12,16,24,48,24];
      var actual = productOfArray(input);
      assert.deepEqual(actual, expected);
    });
    it('should resolve basic scenario3', function(){
      var input = [9,2,7,5];
      var expected = [70,315,90,126];
      var actual = productOfArray(input);
      assert.deepEqual(actual, expected);
    });
  })
  describe('valid parenthesis', function(){
    it('should return true', function(){
      var input = "()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should ignore star', function(){
      var input = "(*)";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star as left paren', function(){
      var input = "(*))";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should return false', function(){
      var input = ")";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should handle two separate parens', function(){
      var input = "()()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens', function(){
      var input = "(*";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens2', function(){
      var input = "(((***";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens3', function(){
      var input = "(((***)()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens4', function(){
      var input = "(((***)()(";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens5', function(){
      var input = "(((***))))()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens6', function(){
      var input = "()**(()";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should return false on left parens with one star', function(){
      var input = "(*)(";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
  })
  describe('Number of islands', function(){
    it('should solve basic scenario', function(){
      var input = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
      var expected = 1;
      var actual = numberOfIslands(input);
      assert.equal(actual, expected);
    })
    it('should solve basic scenario 2', function(){
      var input = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]];
      var expected = 3;
      var actual = numberOfIslands(input);
      assert.equal(actual, expected);
    })
    it('should return 12', function(){
      var input = [["0","0","0","0","0","1","0","1","0","0","1"],["0","0","0","0","0","0","0","0","1","0","1"],["0","0","0","0","0","0","0","0","1","0","0"],["0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","1","0"],["0","0","0","0","0","1","0","1","0","1","0"],["0","0","0","0","0","1","1","0","1","1","1"],["0","0","0","0","0","1","0","0","0","1","0"],["0","0","0","0","0","0","1","0","0","0","1"],["0","0","0","0","0","0","1","0","1","0","1"],["0","0","0","0","1","1","1","0","1","1","0"],["1","0","0","0","0","0","0","1","0","0","0"]];
      var expected = 12;
      var actual = numberOfIslands(input);
      assert.equal(actual, expected);
    });
  })
  describe('Minimum path sum', function(){
    it('should solve basic scenario', function(){
      var input = [[1,3,1],[1,5,1],[4,2,1]];
      var expected = 7;
      var actual = minimumPathSum(input);
      assert.equal(actual, expected);
    })
    it('should RETURN 45', function(){
      var input = [[1,3,1,1,2,4,5,4,7,1],[1,5,1,2,4,5,4,7,2,2],[4,1,2,4,5,4,7,4,5,6],[1,2,4,5,4,4,7,4,5,6],[1,2,4,5,4,4,7,9,4,5],[2,8,2,4,5,4,4,7,2,1],[2,3,1,2,4,5,4,4,7,1],[2,2,3,5,2,4,5,4,4,7],[2,3,2,3,1,2,4,5,4,7],[2,3,2,3,2,3,2,4,5,4]];
      var expected = 45;
      var actual = minimumPathSum(input);
      assert.equal(actual, expected);
    })
    it('should handle 0\'s', function(){
      var input = [[9,2,8],[6,0,9],[1,0,0]];
      var expected = 11;
      var actual = minimumPathSum(input);
      assert.equal(actual, expected);
    })
  })
  describe('Search Rotated Sorted Array', function () {
    it('should solve basic scenario 1', function () {
      var input = [2,3,4,5,1];
      var expected = 0;
      var actual = searchRotatedSortedArray(...[input, input[0]]);
      assert.equal(actual, expected);
    })
    it('should solve basic scenario 2', function () {
      var input = [3,4,5,1,2];
      var expected = 0;
      var actual = searchRotatedSortedArray(...[input, input[0]]);
      assert.equal(actual, expected);
    })
    it('should solve basic scenario 3', function () {
      var input = [4,5,1,2,3];
      var expected = 0;
      var actual = searchRotatedSortedArray(...[input, input[0]]);
      assert.equal(actual, expected);
    })
    it('should solve basic scenario 4', function () {
      var input = [5,1,2,3,4];
      var expected = 0;
      var actual = searchRotatedSortedArray(...[input, input[0]]);
      assert.equal(actual, expected);
    })
    it('should handle non existent items', function () {
      var input = [4,5,6,7,0,1,2];
      var expected = -1;
      var actual = searchRotatedSortedArray(...[input, 3]);
      assert.equal(actual, expected);
    })
    it('should handle empty array', function () {
      var input = [];
      var expected = -1;
      var actual = searchRotatedSortedArray(...[input, 3]);
      assert.equal(actual, expected);
    })
    it('should handle 2 items array', function () {
      var input = [1,3];
      var expected = -1;
      var actual = searchRotatedSortedArray(...[input, 0]);
      assert.equal(actual, expected);
    })
    it('should handle 2 items array 2', function () {
      var input = [3,1];
      var expected = 1;
      var actual = searchRotatedSortedArray(...[input, 1]);
      assert.equal(actual, expected);
    })
    it('should handle 3 items array', function () {
      var input = [1,3,5];
      var expected = 1;
      var actual = searchRotatedSortedArray(...[input, 3]);
      assert.equal(actual, expected);
    })
    it('should handle basic scenario', function () {
      var input = [4,5,6,7,0,1,2];
      var expected = 1;
      var actual = searchRotatedSortedArray(...[input, 5]);
      assert.equal(actual, expected);
    })
    it('should return 4', function () {
      var input = [4,5,6,7,8,1,2,3];
      var expected = 4;
      var actual = searchRotatedSortedArray(...[input, 8]);
      assert.equal(actual, expected);
    })
  })
  describe('Construct BST from preordered traversal', function(){
    it('should have working util BST methods', function(){
      var arr = [1,2,3,4,null,5,6,7,null,null,8];
      var root = ArrayToBinaryTree(arr)
      var output = BinaryTreeToArray(root);
      assert.deepEqual(output, arr);
    })
    it('should have working util BST methods2', function(){
      var arr = [3,2,null,1];
      var root = ArrayToBinaryTree(arr)
      var output = BinaryTreeToArray(root);
      assert.deepEqual(output, arr);
    })
    it('should have working util BST methods3', function(){
      var arr = [8,7,null,6,null,5,null,4,null,3,null,2,null,1];
      var root = ArrayToBinaryTree(arr)
      var output = BinaryTreeToArray(root);
      assert.deepEqual(output, arr);
    })
    it('should have working util BST methods4', function(){
      var arr = [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8];
      var root = ArrayToBinaryTree(arr)
      var output = BinaryTreeToArray(root);
      assert.deepEqual(output, arr);
    })
    // it('should have working util BST methods5', function(){
    //   var arr = [19,8,20,4,11,null,null,null,null,null,13,12,14];
    //   var root = ArrayToBinaryTree(arr)
    //   var output = BinaryTreeToArray(root);
    //   assert.deepEqual(output, arr);
    // })
    it('should solve example1', function(){
      var input = [8,5,1,7,10,12];
      var expected = [8,5,10,1,7,null,12];
      var actual = BinaryTreeToArray(constructBst(input));
      assert.deepEqual(actual, expected);
    })
    it('should handle all left side', function(){
      var input = [4,3,2,1];
      var expected = [4,3,null,2,null,1];
      var actual = BinaryTreeToArray(constructBst(input));
      assert.deepEqual(actual, expected);
    })
    it('should handle all right side', function(){
      var input = [1,2,3,4];
      var expected = [1,null,2,null,3,null,4];
      var actual = BinaryTreeToArray(constructBst(input));
      assert.deepEqual(actual, expected);
    })
    it('should handle left and right on both sides', function(){
      var input = [8,5,1,7,10,9,12];
      var expected = [8,5,10,1,7,9,12];
      var actual = BinaryTreeToArray(constructBst(input));
      assert.deepEqual(actual, expected);
    })
    it('should handle craziness', function(){
      var input = [19,4,8,11];
      var expected = [19,4,null,null,8,null,11];
      var actual = BinaryTreeToArray(constructBst(input));
      assert.deepEqual(actual, expected);
    })
    // it('should handle non standard scenario', function(){
    //   var input = [19,8,4,11,13,12,14,20];
    //   var expected = [19,8,20,4,11,null,null,null,null,null,13,12,14];
    //   var actual = BinaryTreeToArray(constructBst(input));
    //   assert.deepEqual(actual, expected);
    // })
  })
  describe('Leftmost column', function(){
    function BinaryMatrix(arr) {
      this.arr = arr;
      this.count = 0;
      //@param {integer} x, y
      //@return {integer}
      this.get = function(x, y) {
        if(++this.count > 100 ) throw 'Too many gets!'
        return arr[x][y];
      };
      //@return {[integer, integer]}
      this.dimensions = function() {
        return [arr.length,arr[0].length];
      };
    };

    it('Should solve basic scenario', function(){
      var input = new BinaryMatrix([[0,0,0,1],[0,1,1,1],[0,0,0,0]]);
      var expected = 1;
      var actual = leftmostColumnWithOne(input);
      assert.deepEqual(actual, expected);
    });
  })
})