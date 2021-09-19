// Code your solutions in this file
/*
for (let age = 30; age <40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }
    return gifts;
}
wrapGifts(gifts);
//Condition states that we should run the code in the loop body while i is less than gifts.length (3 in the above example)
//Our iteration, i++, increments our counter by 1 at the end of each pass through the loop.
*/

//Assignment: This function has two arguments; an array of strings and an event name:

const name = ["Lisa", "Kaitlin", "Jan"];
const surprise = "for the wonderful surprise gift!";

function writeCards(name){
    let messageArray = [];
    for (let i=0; i < name.length; i++){
        const message = (`Thank you, ${name[i]}, ${surprise}`);
        messageArray.push(message);
    }
    return messageArray;    
}
// while loop
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    let i = 0 // the initialization moves OUTSIDe of the body of the loop!
    while (i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++; // the iteration moves INSIDE the body of the loop!
    }
    return gifts;
}
wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

function countDown(integer){
    while (integer >=0){
        console.log(integer);
        integer--;
    }
}
    countDown(11);    
    countDown(4);
    