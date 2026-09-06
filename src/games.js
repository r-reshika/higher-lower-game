const input = require("readline-sync");
//taking first player information
let name1=input.question("enter first player name");
let num1=input.question("enter your number");
//taking second player information
let name2=input.question("enter second player name");
let num2=input.question("enter your number");

while (true){
//guessing logis
//player one guessing
let guess = Number(input.question('player one guess the number'));
if (guess === num2){
    console.log("player is winner");
    break;
} 
else if (guess<num2){
    console.log("hint:Higher");
} else {
    console.log("hint:Lower");
}
//player two guessing
guess = Number(input.question('player two guess the number'));
if (guess === num1) {
    console.log ("player two is winner");
    break;
} else if (guess<num1) {
console.log("hint:Higher");
} else {
    console.log("hint:Lower");
} }