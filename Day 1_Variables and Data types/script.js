// Day 1: Variables and Data Types
// Tasks/Activities:


// Activity 1: Varibale Declaration
// Task 1: Declare a variable using var, assign it a number, and log the valur to the console.
var num = 10;
console.log(num);

// Task 2: Declare a varibale sing let, assign it a string, and log thr value to the console.
let str = "Hello, Meet!";
console.log(str);


// Activity 2: Contant Declaration
// Task 3: Declare a variable using const, assign it a boolean, and log the value to the console.
const bool = true;
console.log(bool);


// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num1 = 10;
console.log(typeof num1);

let str1 = "Hello, Meet";
console.log(typeof str1);

let bool1 = true;
console.log(typeof bool1);

let obj = {name: "Meet", age: 20};
console.log(typeof obj);

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);


// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let num2 = 10;
console.log(num2);
num2 = 20;
console.log(num2);


// Activity 5: Understanding const
// Task 6: try reassigning a variable declared with const and observe the error.
const num3 = 10;
console.log(num3);
num3 = 20;
console.log(num3);

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares varibles of different data types and logs both the value and type of each variable to the console.
let num4 = 10;
console.log(num4, typeof num4);

let str2 = "Hello, Meet";
console.log(str2, typeof str2);

let bool2 = true;
console.log(bool2, typeof bool2);

let obj1 = {name: "Meet", age: 20};
console.log(obj1, typeof obj1);

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1, typeof arr1);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignmnet.
let num5 = 10;
console.log(num5);
num5 = 20;
console.log(num5);

const num6 = 10;
console.log(num6);
num6 = 20;
console.log(num6);

// Achievement:
// By the end of these activities, you will:
// - Know how to declare variables using var, let and const.
// - Understand the different data types in JavaScript.
// - Be able to use the typeof operator to identify the data type of a variable.
// - Understand the  concept of variable reassignment and the immutability of const variables.