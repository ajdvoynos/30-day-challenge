import assert from "assert";
import removeDuplicates from "../deleting items/removeDuplicates.js";
import removeElement from "../deleting items/removeElement.js";

describe('Deleting items', () => {
    describe('Remove Element', () => {
        it('Should solve example 1', () => {
            var input = [[3,2,2,3], 3];
            var expected = 2;
            //method should modify the array...🙄
            var actual = removeElement(...input);
            assert.deepStrictEqual(actual, expected);
            assert.deepStrictEqual(input[0], [2,2]);
        });
        it('Should solve example 2', () => {
            var input = [[0,1,2,2,3,0,4,2], 2];
            var expected = 5;
            //method should modify the array...🙄
            var actual = removeElement(...input);
            assert.deepStrictEqual(actual, expected);
            assert.deepStrictEqual(input[0], [0,1,3,0,4]);
        });
    })
    describe('Remove Duplicate Sorted Array', () => {
        it('Should solve example 1', () => {
            var input = [1,1,2];
            var expected = 2;
            //method should modify the array...🙄
            var actual = removeDuplicates(input);
            assert.deepStrictEqual(actual, expected);
        });
        it('Should solve example 2', () => {
            var input = [0,0,1,1,1,2,2,3,3,4];
            var expected = 5;
            //method should modify the array...🙄
            var actual = removeDuplicates(input);
            assert.deepStrictEqual(actual, expected);
        });
    })
});