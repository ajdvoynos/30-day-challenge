import assert from "assert";
import subArraySum from "../week4/subArraySumEqualsK.js"
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
});