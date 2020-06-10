import { randomNum } from "./math";
import * as EventEmittor from "events";
import * as $ from "jquery";
import * as every from "react";

var min = 0;
var max= 100;

var hint = "The number is between " + min + " and " + max + "."; 
const emittor = new EventEmittor();
var message = "";
emittor.on('guessed',function(){
    alert(message);
});

function generateNum(number) {
    return randomNum(number);
}

var num = generateNum(100);
console.log("The number is between 0 and 100. Guess it!");

export function guessNum() {
    var number  = document.getElementById("fname").value;
    if( number == num){
        message = "Congrats! You won";
        max = number;
        min = number;
        console.log(message);
    }
    else if ( number < num )
    {
        message = "You Undershot!";
        min = number  + 1;
        console.log(message);
    }
    else {
        message = "You Overshot!";
        max = number - 1;
        console.log(message);
    }
    emittor.emit('guessed');
    hint = "The number is between " + min + " and " + max + "."; 
    $(document).ready(function(){
        $('#hint').text(hint);
      });
}

$(document).ready(function(){
    $('#hint').text(hint);
  });
