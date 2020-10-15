import assert from "assert";
import checkIfExist from "../searching/checkIfExists.js";

describe('Searching Items', () => {
    describe('Check if double exists', () => {
        it('Should solve example 1', () => {
            var input = [10,2,5,3];
            var expected = true;
            var actual = checkIfExist(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 2', () => {
            var input = [7,1,14,11];
            var expected = true;
            var actual = checkIfExist(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 3', () => {
            var input = [3,1,7,11];
            var expected = false;
            var actual = checkIfExist(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should handle two zeroes', () => {
            var input = [3,0,1,7,0,11];
            var expected = true;
            var actual = checkIfExist(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should handle one zero', () => {
            var input = [3,0,1,7,11];
            var expected = false;
            var actual = checkIfExist(input);
            assert.deepStrictEqual(actual, expected);
        });
    });
});