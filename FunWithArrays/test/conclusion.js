import assert from "assert";
import heightChecker from "../conclusion/heightChecker.js";
import duplicateZeros from "../inserting/duplicateZeroes.js";
import merge from "../inserting/mergeSorted.js";

describe('Conclusion', () => {
    describe('Height Checker', () => {
        it('Should solve example 1', () => {
            var input = [1,1,4,2,1,3];
            var expected = 3;
            var actual = heightChecker(input)
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 2', () => {
            var input = [5,1,2,3,4];
            var expected = 5;
            var actual = heightChecker(input)
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 3', () => {
            var input = [1,2,3,4,5];
            var expected = 0;
            var actual = heightChecker(input)
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 4', () => {
            var input = [1,1,1,1,1,1,1,1];
            var expected = 0;
            var actual = heightChecker(input)
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 5', () => {
            var input = [2,1,2,1,1,2,2,1];
            var expected = 4;
            var actual = heightChecker(input)
            assert.deepStrictEqual(actual, expected);
        });
        it('Should handle 2 el array', () => {
            var input = [2,1];
            var expected = 2;
            var actual = heightChecker(input)
            assert.deepStrictEqual(actual, expected);
        });

    });
});