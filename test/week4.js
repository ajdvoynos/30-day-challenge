import assert from "assert";
import subArraySum from "../week4/subArraySumEqualsK.js"
import bitwiseNumberRange from "../week4/bitwiseNumberRange.js";
describe('Week3', function(){
  describe('Sub Array sum equals K', function(){
    it('Should solve example1', function(){
      var input = [[1,1,1],2];
      var expected = 2;
      var actual = subArraySum(...input);
      assert.equal(actual, expected);
    })
    it('Should solve bigger array', function(){
      var input = [[6,-4,5,-4,-9,-3,4,4,8,-7,2,0,-10,-9,-3,7],5];
      var expected = 4;
      var actual = subArraySum(...input);
      assert.equal(actual, expected);
    })
    it('Should handle 1 and 0s', function(){
      var input = [[1,0,1,0,1,0,1],1];
      var expected = 12;
      var actual = subArraySum(...input);
      assert.equal(actual, expected);
    })
  })
  describe('Bitwise number range', function(){
    it('Should solve example 1', function(){
      var input = [5,7];
      var expected = 4;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 2', function(){
      var input = [0,1];
      var expected = 0;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 3', function(){
      var input = [26,29];
      var expected = 24;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 4', function(){
      var input = [4,5];
      var expected = 4;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 5', function(){
      var input = [10,11];
      var expected = 10;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 6', function(){
      var input = [20,22];
      var expected = 20;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 7', function(){
      var input = [20,32];
      var expected = 0;
      var actual = bitwiseNumberRange(...input);
      assert.equal(actual, expected);
    })
  })
});