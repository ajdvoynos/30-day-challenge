import assert from "assert";
import productOfArray from "../week3/productOfArray.js";

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
})