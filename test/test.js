import assert from "assert";
import happy from './../week1/happy.js';
describe('Week1', function(){
  describe('happy', function(){
    it('should return true for 7', function(){
      assert.equal(happy(7), true);
    })
  });
});
