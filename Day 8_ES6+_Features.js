// Day 8: ES6+ Features
// Tasks/Activities:


// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let fName = "Meet";
let age = 20;
let str = `Hi, ${fName}! Your age is ${age}`;
console.log(str);

// Tack 2: Create a multi-line string using template literals and log it to the console.
str = `Hi, ${fName}
Your age is ${age}
Thank you!`;
console.log(str);


// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(first);
console.log(second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "How to win friends and influence people?",
    author: "Dale Karnegie",
    year: 1936,
};
let { title, author } = book;
console.log(title);
console.log(author);


// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr2 = [6, 7, 8, 9, 10];
let combineArr = [...arr, ...arr2];
console.log(combineArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and retum the result.
function sum(...numbers) {
    return numbers.reduce((sum, number) => (sum += number));
}
console.log(sum(1, 2, 3, 4, 5));


// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parametar.
function product(num1, num2 = 1) {
    return num1 * num2;
}
console.log(product(5));
console.log(product(5, 3));


// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const bookTitle = "The Little Prince";
const bookAuthor = "Antoine de Saint-Exupéry";
const book1 = {
    // Property shorthand
    bookTitle,
    bookAuthor,
    // Method shorthand
    summary() {
        return `${this.bookTitle} by ${this.bookAuthor} is a classic novel.`;
    },
    // Computed property names
    ["year_" + new Date().getFullYear()]: "Published in 1943",
};
console.log(book1);
console.log(book1.summary());

// Tack 9: Create an object with computed property names based on variables and log the object to the console.
const myKey = "dynamicKey";
const myValue = 42;
const myObject = {
    [myKey]: myValue,
};
console.log(myObject);


// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

// 3. Spread ant Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.


// Achievement:
// By the end of these activities, you will:
// Understand and use template literals for interpolation and multi-line strings.
// Apply destructuring extract values from arrays and objects.
// Utilize spread and rest operators for array manipulation and function arguments.
// Define functions with deal parameters.
// Create objects using enhanced object literals, including methods and computed property names.