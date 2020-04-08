import assert from "assert";
import middleLinkedList, { ListNode, arrayToList } from "../week2/middleLinkedList.js";

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
});
