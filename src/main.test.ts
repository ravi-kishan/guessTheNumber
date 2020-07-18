import { expect } from "chai";
import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from "jsdom";
const htmlFile:any = fs.readFileSync(path.resolve(__dirname, 'index.html')).toString('utf8')
const dom:any = new JSDOM(htmlFile);
global.window = dom.window;
global.document = dom.window.document;

import   { guessNum }   from "./index";

describe('guessTheNumber test', () => {
   
    
 it('should return You Overshot!', () => {
        var result = guessNum(101);
        expect(result).to.equal('You Overshot!');
    });
 it('should return You Undershot!', () => {
        var result = guessNum(-1);
        expect(result).to.equal('You Undershot!');
    });
});