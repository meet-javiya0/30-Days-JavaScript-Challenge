// Day 15: Closures
// Tasks/Activities:


// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function parent() {
    let a = 5;
    function child() {
        console.log(a);
    }
    return child;
}
let f = parent();
f();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function incrementCounter() {
    let counter = 0;
    function increment() {
        return counter++;
    }
    return increment;
}
let f2 = incrementCounter();
console.log(f2());
console.log(f2());
console.log(f2());


// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createID() {
    let oldID = 0;
    function create() {
        let newID = oldID++;
        return newID;
    }
    return create;
}
let f3 = createID();
console.log(f3());
console.log(f3());
console.log(f3());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(uName) {
    function greet() {
        return `Hello, ${uName}`;
    }
    return greet;
}
let f4 = greetUser("Jenish");
console.log(f4());


// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function loop() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(function index() {
            return `index: ${i}`;
        });
    }
    return array;
}
let f5 = loop();
f5.forEach((i) => {
    console.log(i());
});


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove and list items.
function items() {
    let item = [];
    function addItem(iName) {
        item.push(iName);
    }
    function removeItem(iName) {
        item.pop(iName);
    }
    function getItem() {
        console.log(item);
    }
    return { addItem, removeItem, getItem };
}
let f6 = items();
f6.addItem("Food");
f6.addItem("Fast Food");
f6.addItem("Healthy Food");
f6.getItem();
f6.removeItem("Fast Food");
f6.getItem();


// Activity 5: Memoization
// Task 7: Write a function that memoize the results of another function. Use a closure to store the results of previous computations.
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = (function () {
    const cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            const result = fibonacci(n);
            cache[n] = result;
            return result;
        }
    };
})();
console.log(memoizedFibonacci(10));

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
const factMemoized = (function () {
    const cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = fact(n);
            return cache[n];
        }
    };
})();
console.log(factMemoized(5));


// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.

// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.

// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.

// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.

// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.


// Achievement:
// By the end of these activities, you will:
// Understand and create closures in JavaScript.
// Use closures to maintain private state and create encapsulated modules.
// Apply closures in practical scenarios like generating unique IDs and memoization.
// Use closures in loops to capture and use variables correctly.