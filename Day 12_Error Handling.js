// Day 12: Error Handling
// Tasks/Activities:


// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throw an error and use a try-catch block to handle the error and log an appropriate message to the console.
function error() {
    try {
        throw new Error("Kaik vandho chhe");
    } catch (error) {
        console.error("Task-1 Error:", error.message);
    }
}
error();

// Task 2: Create a function that divides two numbers and throw an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(num1, num2) {
    if (num2 == 0) {
        throw new Error("Divide by zero");
    }
    return num1 / num2;
}
try {
    console.log(divideNumbers(5, 2));
} catch (error) {
    console.error("Task-2 Error:", error.message);
}


// Activity 2: Finally block
// Task 3: Write a script that includes a try-catch block and a finally block. Log message in the try, catch, and finally block to observe the exectuion flow.
try {
    console.log("Task-3 try block");
    throw new Error("error avi gay bhai");
} catch (error) {
    console.error("Task-3 Error:", error.message);
} finally {
    console.log("Task-3 finally block");
}


// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function customErroClass(num3, num4) {
    if (num4 == 0) {
        throw new CustomError("Custom error chhe aa");
    }
    return num3 / num4;
}
try {
    console.log(customErroClass(4, 0));
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Task-4 Custom Error:", error.message);
    } else {
        console.error("Task-4 Unexpected Error:", error.message);
    }
}

// Task 5: Write a function that validates user input (e.g. checking if a string is not empty) and throws a custom error if the validation fails, Handle the custom error using try-catch.
class DataValidation extends Error {
    constructor(message) {
        super(message);
        this.name = "DataValidation";
    }
}
function checkData(name) {
    if (name == "") {
        throw new DataValidation("Data is empty");
    }
    console.log(name);
}
try {
    checkData("");
} catch (error) {
    if (error instanceof DataValidation) {
        console.error("Task-5 Custom Error:", error.message);
    } else {
        console.log("Task-5 Unexpected error:", error.message);
    }
}


// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rand = Math.random();
        if (rand < 0.5) {
            resolve("resolved");
        } else {
            reject("rejected");
        }
    }, 300);
});
prom.then((message) => {
    console.log("Task-6:", message);
}).catch((message) => {
    console.log("Task-6:", message);
});

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly reolves or rejects, and log the error message.
async function seven() {
    try {
        let message = await prom;
        console.log("Task-7:", message);
    } catch (error) {
        console.error("Task-7 Error:", error);
    }
}
seven();


// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://nothingworksinthisurl.in")
    .then((data) => {
        console.log("Task-8:", data);
    })
    .catch((error) => {
        console.error("Task-8 error:", error.message);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchdata() {
    try {
        let response = await fetch("https://nothingworksinthisurl.in");
        console.log("Task-9:", response);
    } catch (error) {
        console.log("Task-9 Error:", error.message);
    }
}
fetchdata();


// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.

// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.

// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.

// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.


// Achievement:
// By the end of these activities, students will:
// Understand and implement basic error handling using try-catch blocks.
// Use finally blocks to execute code regardless of the try-catch outcome.
// Create and use custom error classes.
// Handle errors in promises using .catch() and within async functions using try-catch.
// Implement graceful error handling when making network requests with the fetch API.