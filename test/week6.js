import firstBadVersion from "../week6/firstBadVersion.js";
import assert from "assert";
import numJewelsInStones from "../week6/jewelsAndStones.js";
import canConstruct from "../week6/ransomNotes.js";
import findComplement from "../week6/numberComplement.js";
import firstUniqChar from "../week6/firstUniqueChar.js";
import majorityElement from "../week6/majorityElement.js";

describe('Week 6', function () {
  describe('First bad version', function () {
    it('Should solve example 1', function () {
      var input = 5;
      var expected = 4;
      var actual = firstBadVersion(n => n >= expected)(input);
      assert.equal(actual, expected);
    });
  });
  describe('Jewels and stones', function () {
    it('Should solve example 1', function () {
      var input = ['aA','aAAbbbb'];
      var expected = 3;
      var actual = numJewelsInStones(...input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = ['z','ZZ'];
      var expected = 0;
      var actual = numJewelsInStones(...input);
      assert.equal(actual, expected);
    });
    it('Should handle large strings', function () {
      var input = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQR','0s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially'];
      var expected = 167;
      var actual = numJewelsInStones(...input);
      assert.equal(actual, expected);
    });
  });
  describe('Ransom note', function () {
    it('Should solve example 1', function () {
      var input = ['a','b'];
      var expected = false;
      var actual = canConstruct(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 2', function () {
      var input = ['aa','ab'];
      var expected = false;
      var actual = canConstruct(...input);
      assert.equal(actual, expected);
    })
    it('Should solve example 3', function () {
      var input = ['aa','aab'];
      var expected = true;
      var actual = canConstruct(...input);
      assert.equal(actual, expected);
    })
    it('Should solve empty magazine', function () {
      var input = ['a',''];
      var expected = false;
      var actual = canConstruct(...input);
      assert.equal(actual, expected);
    })
    it('Should handle both empty', function () {
      var input = ['',''];
      var expected = true;
      var actual = canConstruct(...input);
      assert.equal(actual, expected);
    })
    it('Should handle 1 element note', function () {
      var input = ['i','dgbcacfbeaghfb'];
      var expected = false;
      var actual = canConstruct(...input);
      assert.equal(actual, expected);
    })
  })
  describe('Number complement', function () {
    it('Should solve example 1', function () {
      var input = 5;
      var expected = 2;
      var actual = findComplement(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 1', function () {
      var input = 1;
      var expected = 0;
      var actual = findComplement(input);
      assert.equal(actual, expected);
    });
  });
  describe('First Unique Char', function () {
    it('Should solve example1', function () {
      var input = 'leetcode';
      var expected = 0;
      var actual = firstUniqChar(input);
      assert.equal(actual, expected);
    });
    it('Should solve example2', function () {
      var input = 'loveleetcode';
      var expected = 2;
      var actual = firstUniqChar(input);
      assert.equal(actual, expected);
    });
  });
  describe('Majority element', function () {
    it('Should solve example 1', function () {
      var input = [3,2,3]
      var expected = 3
      var actual = majorityElement(input);
      assert.equal(actual, expected);
    });
    it('Should solve example 2', function () {
      var input = [2,2,1,1,1,2,2]
      var expected = 2
      var actual = majorityElement(input);
      assert.equal(actual, expected);
    });
  });
});