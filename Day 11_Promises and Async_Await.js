// Day 11: Promises and Async/Await
// Tasks/Activities:


// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});
promise.then(() => {
    console.log("Task-1: Promise resolved!");
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 2000);
});
promise2.catch(() => {
    console.error("Task-2: Something went wrong!");
});


// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.
function fetchUserIdAndName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 101, name: "John Doe" });
        }, 200);
    });
}
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "John Doe",
                email: "john@doe.com",
                mNumber: 123456789,
            });
        }, 200);
    });
}
fetchUserIdAndName()
    .then((uId) => {
        console.log("Task-3: uId: ", uId);
        return fetchUserData();
    })
    .then((uData) => {
        console.log("Task-3: uData: ", uData);
        console.log("Task-3: Data fetched successfully");
    })
    .catch(() => {
        console.error("Task-3: Error in fetching the data");
    });


// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task-4: Message send thay gayo bhai");
    }, 1200);
});
async function fun() {
    let message = await promise3;
    console.log(message);
}
fun();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task-5: Error chee kaik");
    }, 500);
});
async function fun2() {
    try {
        let message = await promise4;
        console.log(message);
    } catch (error) {
        console.log("Task-5: Error aa gaya bhai,", error);
    }
}
fun2();


// Activity 4: Fetching Data from API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://api.github.com/users/meet-javiya0")
    .then((response) => {
        console.log("Task-6: ", response);
        console.log("Task-6: completed");
    })
    .catch(() => {
        console.log("Task-6: Kaik error ayvi chhe bhai");
    });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData() {
    try {
        let response = await fetch("https://api.github.com/users/meet-javiya0");
        console.log("Task-7: ", response);
        console.log("Task-7: completed");
    } catch (error) {
        console.log("Task-7: error avi gay");
    }
}
fetchData();


// Activity 5: Concurrent Promises
// Task 8: Use Promises.all to wait for multiple promises to resolve and then log all their value.
Promise.all([promise, promise3])
    .then(() => {
        console.log("Task-8: All promise resolved");
    })
    .catch(() => {
        console.log("Task-8: All promise does not resolved");
    });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise2, promise, promise3, promise4])
    .then((data) => {
        console.log("Task-9: ", data, ",resolved first");
    })
    .catch((data) => {
        console.log("Task-9: ", data, ",rejected first");
    });


// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.

// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.

// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.

// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.


// Achievement:
// By the end of these activities, students will:
// Understand and create promises, including handling resolved and rejected states.
// Chain multiple promises to perform sequential asynchronous operations.
// Use async/await to handle asynchronous code more readably.
// Fetch data from public APIs using both promises and async/await.
// Manage multiple concurrent promises using Promise.all and Promise.race.