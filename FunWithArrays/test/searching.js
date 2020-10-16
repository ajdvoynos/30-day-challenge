import assert from "assert";
import checkIfExist from "../searching/checkIfExists.js";
import validMountainArray from "../searching/validmountain.js";

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
    describe('Valid mountain', () => {
        it('Should solve example 1', () => {
            var input = [2,1];
            var expected = false;
            var actual = validMountainArray(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 1', () => {
            var input = [2,1];
            var expected = false;
            var actual = validMountainArray(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 2', () => {
            var input = [3,5,5];
            var expected = false;
            var actual = validMountainArray(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 3', () => {
            var input = [0,3,2,1];
            var expected = true;
            var actual = validMountainArray(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should return false for 1 element array', () => {
            var input = [1];
            var expected = false;
            var actual = validMountainArray(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should return false for only going up array', () => {
            var input = [1,2,3];
            var expected = false;
            var actual = validMountainArray(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should return false for 2 element array', () => {
            var input = [1,2];
            var expected = false;
            var actual = validMountainArray(input);
            assert.deepStrictEqual(actual, expected);
        });
    });
});