import firstBadVersion from "../week6/firstBadVersion.js";
import assert from "assert";

describe('Week 6', function () {
  describe('First bad version', function () {
    it('Should solve example 1', function () {
      var input = 5;
      var expected = 4;
      var actual = firstBadVersion(n => n >= expected)(input);
      assert.equal(actual, expected);
    });
  });
});