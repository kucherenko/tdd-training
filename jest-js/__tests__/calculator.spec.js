import {sum} from "../src/calculator";

describe('Calculator', function () {
    it('should sum two numbers', function () {
        expect(sum(1, 2)).toEqual(3);
    });
});