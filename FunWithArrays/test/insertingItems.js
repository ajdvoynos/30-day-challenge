import assert from "assert";
import duplicateZeros from "../inserting items/duplicateZeroes.js";

describe('InsertingItems', () => {
    describe('Duplicate Zeroes', () => {
        it('Should solve example 1', () => {
            var input = [1,0,2,3,0,4,5,0];
            var expected = [1,0,0,2,3,0,0,4];
            //duplicateZeroes should modify the array...🙄
            duplicateZeros(input)
            assert.deepStrictEqual(input, expected);
        });
        it('Should not modify array', () => {
            var input = [1,2,3];
            var expected = [1,2,3];
            duplicateZeros(input)
            assert.deepStrictEqual(input, expected);
        });
    });
});