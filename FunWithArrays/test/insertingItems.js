import assert from "assert";
import duplicateZeros from "../inserting/duplicateZeroes.js";
import merge from "../inserting/mergeSorted.js";

describe('InsertingItems', () => {
    describe('Duplicate Zeroes', () => {
        it('Should solve example 1', () => {
            var input = [1,0,2,3,0,4,5,0];
            var expected = [1,0,0,2,3,0,0,4];
            //method should modify the array...🙄
            duplicateZeros(input)
            assert.deepStrictEqual(input, expected);
        });
        it('Should not modify array', () => {
            var input = [1,2,3];
            var expected = [1,2,3];
            //method should modify the array...🙄
            duplicateZeros(input)
            assert.deepStrictEqual(input, expected);
        });
    });
    describe('Merge Sorted', () => {
        it('Should solve example 1', () => {
            var input = [[1,2,3,0,0,0], 3, [2,5,6], 3];
            //method should modify the array...🙄
            var expected = [1,2,2,3,5,6];
            merge(...input);

            assert.deepStrictEqual(input[0], expected);
        });
        it('Should solve example 2', () => {
            var input = [[4,0,0,0,0,0], 1, [1,2,3,5,6], 5];
            //method should modify the array...🙄
            var expected = [1,2,3,4,5,6];
            merge(...input);

            assert.deepStrictEqual(input[0], expected);
        });
        it('Should solve example andrei', () => {
            var input = [[4,0,0,0], 1, [1,2,3], 3];
            //method should modify the array...🙄
            var expected = [1,2,3,4];
            merge(...input);

            assert.deepStrictEqual(input[0], expected);
        });



    });
});