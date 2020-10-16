import assert from "assert";
import moveZeroes from "../replace/moveZeroes.js";
import replaceElements from "../replace/replaceWithGreatest.js";
import sortArrayByParity from "../replace/sortByParity.js";

describe('Replacing Items', () => {
    describe('Replace with greatest on right side', () => {
        it('Should solve example 1', () => {
            var input = [17,18,5,4,6,1];
            var expected = [18,6,6,6,1,-1];
            var actual = replaceElements(input);
            assert.deepStrictEqual(actual, expected);
        });
    });
    describe('Move zeroes', () => {
        it('Should solve example 1', () => {
            var input = [0,1,0,3,12];
            var expected = [1,3,12,0,0];
            //Function should update input 🙄
            moveZeroes(input);
            assert.deepStrictEqual(input, expected);
        });
        it('Should solve example 2', () => {
            var input = [0,0,1];
            var expected = [1,0,0];
            //Function should update input 🙄
            moveZeroes(input);
            assert.deepStrictEqual(input, expected);
        });
    });
    describe('Sort by parity', () => {
        it('Should solve example 1', () => {
            var input = [3,1,2,4];
            var expected = [2,4,1,3];
            //Function should update input 🙄
            var actual = sortArrayByParity(input);
            assert.deepStrictEqual(actual, expected);
        });
    });
});