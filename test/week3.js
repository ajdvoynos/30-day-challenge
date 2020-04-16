import assert from "assert";
import productOfArray from "../week3/productOfArray.js";
import validParenthesis from "../week3/validParenthesis.js";

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
  describe('valid parenthesis', function(){
    it('should return true', function(){
      var input = "()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should ignore star', function(){
      var input = "(*)";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star as left paren', function(){
      var input = "(*))";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should return false', function(){
      var input = ")";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should handle two separate parens', function(){
      var input = "()()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens', function(){
      var input = "(*";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens2', function(){
      var input = "(((***";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens3', function(){
      var input = "(((***)()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens4', function(){
      var input = "(((***)()(";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens5', function(){
      var input = "(((***))))()";
      var expected = true;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should use star to close left parens6', function(){
      var input = "()**(()";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })
    it('should return false on left parens with one star', function(){
      var input = "(*)(";
      var expected = false;
      var actual = validParenthesis(input);
      assert.equal(actual, expected);
    })

    
  })
})