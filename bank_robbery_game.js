var user = prompt("You've just robbed a bank and have all the money with you but before leaving the police suddenly arrive! Do you FLEE, HIDE or NEGOTIATE with them?","Type your answer here:").toUpperCase();

switch(user){

case 'FLEE':
var car = prompt("Do you have a getaway car?","Answer YES or NO").toUpperCase();
var proof = prompt("Is your car bullet-proof?","Answer YES or NO").toUpperCase(); 
if (car === "YES" && proof === "YES")
    {console.log("You manage to escape despite your car gettig hit by a rampage of bullets!");}
else if (car === "YES" && proof === "NO")
    {console.log("You manage to start driving away but only until your car gets rampaged with a ton of bullets. Your car breaks down and you end up getting caught by the police! Enjoy prison!");}
else {console.log("You have absolute no chance of fleeing! You hand yourself in...");}
break;
    
case 'HIDE':
var floor = prompt("Which floor do you hide on, 1 or 2?","Answer 1 or 2");
var alone = prompt("Do you hide alone?","Answer YES or NO").toUpperCase();
if ((floor === "1" || floor === "2") && alone === "YES")
    {console.log("You find an empty room on floor " + floor + " and luckily don't get found by the police. You manage to walk out an hour later with a ton of cash in your bag!");}
else {console.log("You hide with one other gang member however he sneezes and makes a noice which is heard by the police. You get caught and get arrested!");}
break;
    
case 'NEGOTIATE':
var hostage = prompt("Do you hold any hostages?","Answer YES or NO").toUpperCase();
var plane = prompt("The police say they will give you a plane to use. Do you believe them?","Answer YES or NO").toUpperCase();
if (hostage === "YES" && (plane === "YES" || plane === "NO"))
    {console.log("They tell the truth and you hand in three hostages in order to receive a plane. You manage to escape!");}
else {console.log("They tell a bogus lie and you have no hostages to negotiate with. It's only a matter of time before the S.W.A.T team arrives and hunts you down!");}
break;
    
default:
console.log("You must state either: 'FLEE', 'HIDE' or 'NEGOTIATE'");
}