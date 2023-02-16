//Concat()
let emptyString = "";

// joint arguments string
let joinedString = emptyString.concat("JavaScript", " is", " fun.");
console.log(joinedString);

// Output: JavaScript is fun.

//Includes()
const message = "JavaScript is fun";

// check if message includes the string "Java"
let result = message.includes("Java");
console.log(result);

// Output: true

//Replace()
const message = "ball bat";

// replace the first b with c
let result = message.replace('b', 'c');
console.log(result);

// Output: call bat

//Search()
let sentence= "I love JavaScript.";

// pattern that searches the first occurence of an uppercase character
let regExp = /[A-Z]/;

// searching for a match between regExp and given string 
let indexReg = sentence.search(regExp);

console.log(indexReg);

// Output: 0

//Replace()

//Sub()

//Slices()
const message = "JavaScript is fun";

// slice the substring from index 0 to 10
let result = message.slice(0, 10);
console.log(result);

// Output: JavaScript

//Trim()
const message = "   JAVASCRIPT IS FUN    ";

// remove leading and trailing whitespaces
const newMessage = message.trim();
console.log(newMessage);

// Output: JAVASCRIPT IS FUN


