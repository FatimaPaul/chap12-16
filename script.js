"use strict";
// CHAPTER 12- IF ELSE AND ELSE IF
// var x = prompt("Where does the Pope Live?");
// if(x === "vetican"){
//     alert("correct answer");
// }else if(x === "rome"){
//     alert("wrong but close");
// }else{
//     // alert("INCORRECT");
//     const userIq = "probelamatic";
// }

// CHAPTER 13- TESTING SET OF CONDITIONS
const weight = 300;
const time = 4;
const gender = "male";
if(weight > 300 && time <6 && gender === "male"){
    // alert("come to our tryout");
}else{
    // alert("come to our cookout");
}

const age =12;
const res = "U.S."
if((age > 65 || age < 21) && res === "U.S."){
    console.log("yes");
}

//CHAPTER 14- NESTED IFS
let t, y, a, b, c, d, e ,f, h, g;
if(c === d){
    if(a === b){
        g = h;
    }
    if(t === y){
        g = h;
    }else {
        e =f;
    }

}
else {
    e = f;
}

// CHAPTER 15 ARRAYS 
var cities = ["Alanta", "Baltimore", "Chicago", "Denver", "losAngles", "Seattle"];
console.log(cities[0]);
console.log(cities[1]);
console.log("welcome to " + cities[3]);

var mixedArray = [1, "Bob", "Now is", true];

//CHAPTER 16- ADDING AND REMOVING ELEMENTS
var pet = [];
pet[0]= "dog";
pet[1] = "cat";
pet[2] = "bird";
pet[3] ="lizard";
pet[6]= "snake";
console.log(pet);

var pets = ["dog", "cat", "bird"];
pets.pop();
console.log(pets);
pets.push("fish");
console.log(pets);

// ASSIGNEMENT CALCULATOR
const marks1 = +prompt("Enter marks 1");
const marks2 = +prompt("Enter marks 2");
const marks3 = +prompt("Enter marks 3");
const averageCal = ((marks1 + marks2 + marks3)/300)*100;
console.log("Your Average of 3 Subjects is " + averageCal);
