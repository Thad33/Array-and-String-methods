let numbers = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(3, 6);
console.log(newArray);

// Output: [ 7, 11, 13 ]

const languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array from start to second-to-last
let new_arr = languages.slice(0, -1);
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// slicing the array from third-to-last
let new_arr1 = languages.slice(-3);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]

//Filter method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);

// Output: [ 2, 4, 6, 8, 10 ]

//Find Method

let num = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = num.find(isEven);
console.log(evenNumber);

// Output: 4

//FindIndex method

// function that returns odd number
function isOdd(element) {
    return element % 2 !== 0;
  }
  
  // defining an array of integers
  let numbers = [2, 8, 1, 3, 4];
  
  // returns the index of the first odd number in the array
  let firstOdd = numbers.findIndex(isOdd);
  
  console.log(firstOdd);
  
  // Output: 2

  //Include Method

  // defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check); 

// Output: true

//IndexOf()

let languages = ["Java", "JavaScript", "Python", "JavaScript"];

// get the index of the first occurrence of "JavaScript"
let index = languages.indexOf("JavaScript");
console.log(index);

// Output: 1