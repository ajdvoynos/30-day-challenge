import assert from "assert";
import middleLinkedList, { ListNode, arrayToList } from "../week2/middleLinkedList.js";
import backspaceStringCompare from "../week2/backspaceStringCompare.js";
import minStack from "../week2/minStack.js";

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
  })
});
