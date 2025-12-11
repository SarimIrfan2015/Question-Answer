let char = prompt("Enter a character:");
let ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("It is a NUMBER");
} else if (ascii >= 65 && ascii <= 90) {
    console.log("It is an UPPERCASE letter");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("It is a LOWERCASE letter");
} else {
    console.log("Invalid character");
}

let num1 = +prompt("Enter 1st number:");
let num2 = +prompt("Enter 2nd number:");

if (num1 > num2) {
    console.log("Larger number: " + num1);
} else if (num2 > num1) {
    console.log("Larger number: " + num2);
} else {
    console.log("Both numbers are EQUAL");
}

let number = +prompt("Enter a number:");

if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

let letter = prompt("Enter a letter:").toLowerCase();

if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    console.log("True → It is a VOWEL");
} else {
    console.log("False → Not a vowel");
}

let correctPassword = "12345";
let userPassword = prompt("Enter your password");

if (userPassword === "") {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password matches.");
} else {
    console.log("Incorrect password");
}

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

let time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0000 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
} else {
    console.log("Invalid time");
}
