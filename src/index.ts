import { randomNum } from "./math";
import { EventEmitter } from "events";
import  { cached } from "@ravik1/locator";
import  $  from "jquery";


var min =  0;
var max= 100;





var hint = "The number is between " + min + " and " + max + "."; 
const emittor = new EventEmitter();
var message = "";
emittor.on('guessed',function(){
    console.log(message)
});

function generateNum(number:number) {
    return randomNum(number);
}

var para = document.createElement("P");               
para.innerText = "The number is between 0 and 100. Guess it!";    

document.body.appendChild(para);  

var inpt = document.createElement("INPUT");
inpt.setAttribute("type", "text");
inpt.setAttribute("id", "guessedValue");
document.body.appendChild(inpt);

var btn = document.createElement("BUTTON");   
btn.innerHTML = "GUESS"; 
document.body.appendChild(btn);  

var show = document.createElement("P"); 
document.body.appendChild(show);  


var num = generateNum(100);
console.log("The number is between 0 and 100. Guess it!");




 export function guessNum(myArg:number) {
    var number;
    if( number == null) {
        number = myArg;
    }
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
    return message;
}


btn.onclick = function() {
    var number = <number><unknown>(<HTMLInputElement>document.getElementById("guessedValue")).value;
    
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
      show.innerText = message;   
}

cached("@ravik1/guessthenumber");

