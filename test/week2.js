import assert from "assert";
import middleLinkedList, { ListNode, arrayToList } from "../week2/middleLinkedList.js";
import backspaceStringCompare from "../week2/backspaceStringCompare.js";

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
  })
});
