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
  })
});