import assert from "assert";
import replaceElements from "../replace/replaceWithGreatest.js";

describe('Replacing Items', () => {
    describe('Replace with greatest on right side', () => {
        it('Should solve example 1', () => {
            var input = [17,18,5,4,6,1];
            var expected = [18,6,6,6,1,-1];
            var actual = replaceElements(input);
            assert.deepStrictEqual(actual, expected);
        });
    });
});