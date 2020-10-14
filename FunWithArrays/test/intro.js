import assert from "assert";
import findNumbers from "../intro/evenNumberOfDigits.js";
import findMaxConsecutiveOnes from "../intro/maxConsecutiveOnes.js";

describe('IntroArrays', () => {
    describe('MaxConsecutiveOnes', () => {
        it('Should return 3', () => {
            var input = [1,1,0,1,1,1];
            var expected = 3;
            var actual = findMaxConsecutiveOnes(input);
            
            assert.equal(actual, expected);
        });
    });
    describe('EvenNumberOfDigits', () => {
        it('Should return 2', () => {
            var input = [12,345,2,6,7896];
            var expected = 2;
            var actual = findNumbers(input);

            assert.equal(actual, expected);
        });
    });
});