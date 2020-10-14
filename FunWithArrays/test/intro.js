import assert from "assert";
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
});