const prompt= require("prompt-sync")();
var speed=prompt("Enter your speed")
// If the speed is less than 70, it should print “Ok
if(speed<70){
    console.log("Ok")}
    
else
{
console.log("Points:"+((speed-70)/5));}
//If the driver gets more than 12 points, the function should print: “License suspended”.

if((speed-70)/5>12){
    
console.log("License Suspended");
}