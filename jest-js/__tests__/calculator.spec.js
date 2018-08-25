import {sum} from "../src/calculator";

describe('Calculator', () => {
    it('should sum two numbers', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});