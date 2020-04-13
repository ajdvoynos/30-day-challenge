import assert from "assert";
import middleLinkedList, { ListNode, arrayToList } from "../week2/middleLinkedList.js";
import backspaceStringCompare from "../week2/backspaceStringCompare.js";
import minStack from "../week2/minStack.js";
import binaryTreeDiameter, { TreeNode, ArrayToBinaryTree } from "../week2/binaryTreeDiameter.js";
import lastStoneWeight from "../week2/lastStoneWeight.js";
import contiguousArray from "../week2/contiguousArray.js";

describe('Week2', function(){
  describe('middleLinkedList', function(){
    it('should return 3', function(){
      var input = arrayToList([1,2,3,4,5])
      var expected = input.next.next;
      var actual = middleLinkedList(input);
      assert.equal(actual, expected);
    })

    it('should handle 1 element list', function(){
      var input = arrayToList([1])
      var expected = input;
      var actual = middleLinkedList(input);
      assert.equal(actual, expected);
    })

    it('should handle pair amount of elements', function(){
      var input = arrayToList([1,2,3,4,5,6])
      var expected = input.next.next.next;
      var actual = middleLinkedList(input);
      assert.equal(actual, expected);
    })
  })

  describe('backspaceStringCompare', function(){
    it('should return true', function(){
      var input = ["ab#c", "ad#c"]
      var expected = true;
      var actual = backspaceStringCompare(...input);
      assert.equal(actual, expected);
    })

    it('should return true 2', function(){
      var input = ["ab##", "c#d#"]
      var expected = true;
      var actual = backspaceStringCompare(...input);
      assert.equal(actual, expected);
    })

    it('should return true 3', function(){
      var input = ["a##c", "#a#c"]
      var expected = true;
      var actual = backspaceStringCompare(...input);
      assert.equal(actual, expected);
    });

    it('should return false', function(){
      var input = ["a#c", "b"]
      var expected = false;
      var actual = backspaceStringCompare(...input);
      assert.equal(actual, expected);
    });
  });

  describe('minStack', function(){
    it('should handle all methods', function(){
      var x = new minStack();
      x.push(-2);
      x.push(0);
      x.push(-3);
      assert.equal(x.getMin(), -3);
      x.pop();
      assert.equal(x.top(), 0);
      assert.equal(x.getMin(), -2);
    });

    it('should return 2', function(){
      var x = new minStack();
      x.push(2);
      x.push(0);
      x.push(3);
      x.push(0);
      x.pop();
      x.pop();
      x.pop();
      assert.equal(x.getMin(), 2);
    })
  });

  describe('Binary Tree Diameter', function(){
    it('should return 3 for basic scenario', function(){
      var input = ArrayToBinaryTree([1,2,3,4,5]);
      var expected = 3;
      var actual = binaryTreeDiameter(input);
      assert.equal(actual, expected);
    });

    it('should return 5 for basic scenario', function(){
      var input = ArrayToBinaryTree([1,2,3,4,5,6,7,8]);
      var expected = 5;
      var actual = binaryTreeDiameter(input);
      assert.equal(actual, expected);
    })

    it('should return 6 for basic scenario', function(){
      var input = ArrayToBinaryTree([1,2,3,4,5,6,7,8,9,10,11,12]);
      var expected = 6;
      var actual = binaryTreeDiameter(input);
      assert.equal(actual, expected);
    })

    it('should handle right balanced tree', function(){
      var input = ArrayToBinaryTree([1,null,2,null,1]);
      var expected = 2;
      var actual = binaryTreeDiameter(input);
      assert.equal(actual, expected);
    })

    it('should handle diameters that do not pass through root', function(){
      var input = ArrayToBinaryTree([1,2,3,4,5,null,null,6,null,7,8,6.1,null,null,null,9,null,null,null,10]);
      var expected = 7;
      var actual = binaryTreeDiameter(input);
      assert.equal(actual, expected);
    })

    it('should handle 1 element tree', function(){
      var input = ArrayToBinaryTree([1]);
      var expected = 0;
      var actual = binaryTreeDiameter(input);
      assert.equal(actual, expected);
    })

    it('should handle null input', function(){
      var input = null;
      var expected = 0;
      var actual = binaryTreeDiameter(input);
      assert.equal(actual, expected);
    })

  })
  describe('Last stone weight', function(){
    it('should return 1', function(){
      var input = [2,7,4,1,8,1];
      var expected = 1;
      var actual = lastStoneWeight(input);
      assert.equal(actual, expected);
    });
  })

  describe('Contiguous binary array', function(){
    it('should return 2', function(){
      var input = [0,1,0];
      var expected = 2;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should return 6', function(){
      var input = [0,0,0,1,1,1];
      var expected = 6;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should return 8', function(){
      var input = [0,0,0,1,1,1,0,0,1,0];
      var expected = 8;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should handle right balanced odd numbered array', function(){
      var input = [0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0];
      var expected = 18;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should handle return 0', function(){
      var input = [0,0];
      var expected = 0;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should handle empty arrays', function(){
      var input = [];
      var expected = 0;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should handle 1 element arrays', function(){
      var input = [1];
      var expected = 0;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should return 6', function(){
      var input = [0,0,1,0,0,0,1,1];
      var expected = 6;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should return 94', function(){
      var input = [1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1];
      var expected = 94;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });
    it('should return 68', function(){
      var input = [0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1];
      var expected = 68;
      var actual = contiguousArray(input);
      assert.equal(actual, expected);
    });

  })
});
