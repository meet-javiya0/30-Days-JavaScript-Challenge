// Day 5: Functions
// Tasks/Activities:


// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEven(number) {
    if (number % 2 == 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}
isEven(5);

// Task 2: Write a function to calculate the square of a number and return the result.
function squareOfANumber(num) {
    return num * num;
}
console.log(squareOfANumber(5));


// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let maxNum = function (num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
maxNum(5, 10);

// Task 4: Write a function expression to concatenate two strings and return the result.
let concat = function (str1, str2) {
    return str1 + str2;
}
console.log(concat("Hello, ", "Meet!"));


// Activity 3: Arrow Function
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(4, 7));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let isContainsCharacter = (str, char) => {
    if (str.indexOf(char) > -1) {
        return true;
    } else {
        return false;
    }
}
console.log(isContainsCharacter("Hello, My name is Meet Javiya!!!", "m"));


// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function product(num1, num2 = 10) {
    return num1 * num2;
}
console.log(product(5));
console.log(product(5, 6));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name, age = 20) {
    return "Hello, " + name + "! You are " + age + " years old.";
}
console.log(greeting("Meet"));
console.log(greeting("Meet", 21));


// Activity 5: Higher-Order Function
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function fun1() {
    console.log("Hello, Meet!");
}
function printFun(fun, num) {
    while (num > 0) {
        fun();
        num--;
    }
}
printFun(fun1, 5);

// Task 10: Write a higer-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function sum1(num) {
    return num + 4;
}
function mul(num) {
    return num * 9;
}
function sumAndMul(f1, f2, num) {
    return f2(f1(num));
}
console.log(sumAndMul(sum1, mul, 2));


// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and log the result.

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and return the result.

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.


// Achievement:
// By the end of these activities, you will:
// Understand and define functions using function declarations, expressions, and arrow functions.
// Use function parameters an default value effectively.
// Create and utilize higher-order functions.
// Apply functions to solve common problems and perform calculations.
// Enhance code reusability and organization using functions.