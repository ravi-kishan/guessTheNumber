import { expect } from "chai";
import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from "jsdom";
const dom:any = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>");
global.window = dom.window;
global.document = dom.window.document;

describe('guessTheNumber test', () => {
    var result1:any,result2:any;
    before(() => {
        return new Promise((resolve) => {
            import('./index')
            .then(content => {
                 result1 = content.guessNum(101);
                 result2 = content.guessNum(-1);
                 resolve();
            })
           
        });
      });
    
 it('should return You Overshot!', () => {
        
        expect(result1).to.equal('You Overshot!');
    });
 it('should return You Undershot!', () => {
        
        expect(result2).to.equal('You Undershot!');
    });
});
