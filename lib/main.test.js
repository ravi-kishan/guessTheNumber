import { expect } from "chai";
import { guessNum } from "./index";
//import { JSDOM } from "jsdom";
describe('guessTheNumber test', () => {
    it('should return You Overshot!', () => {
        var result = guessNum(101);
        expect(result).to.equal("You Overshot!");
    });
    it('should return You Undershot!', () => {
        var result = guessNum(-1);
        expect(result).to.equal("You Undershot!");
    });
});
