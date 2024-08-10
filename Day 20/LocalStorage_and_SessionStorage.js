// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:


// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to `localStorage` and retrieve it. Log the retrieved value.
localStorage.setItem("name", "Meet");
console.log(localStorage.getItem("name"));

// Task 2: Write a script to save an object to `localStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.
let user = {
    uName: "Jenish",
    email: "jenish@gmail.com",
    age: 22,
};
localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));


// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to `localStorage` when submitted. Retrieve and display the saved data on page load.
function addLocalStrageData() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let loginInfo = {
        email,
        password,
    };
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("showData").innerText = `${email}, ${password}`;
}
window.onload = () => {
    let loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    console.log(loginInfo);
    document.getElementById(
        "showData"
    ).innerText = `Email: ${loginInfo.email}, Password: ${loginInfo.password}`;
};

// Task 4: Write a script to remove an item from `localStorage`. Log the `localStorage` content before and after removal.
console.log(JSON.parse(localStorage.getItem("user")));
localStorage.removeItem("user");
console.log(localStorage.getItem("user"));


// Activity 3: Understanding LocalStorage
// Task 5: Write a script to save a string value to `sessionStorage` and retrieve it. Log the retrieved value.
let str = "This is a string";
sessionStorage.setItem("string", str);
console.log(sessionStorage.getItem("string"));

// Task 6: Write a script to save an object to `sessionStorage` by converting it to a JSON string. Retrieve and parse the object, then log it.
let obj = {
    fName: "Jenish",
    lName: "Zalavadiya",
    age: 21,
};
sessionStorage.setItem("obj", JSON.stringify(obj));
console.log(JSON.parse(sessionStorage.getItem("obj")));


// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
function addLocalStrageData2() {
    let uName = document.getElementById("uName").value;
    let email2 = document.getElementById("email2").value;
    let loginInfo2 = {
        uName,
        email2,
    };
    sessionStorage.setItem("loginInfo2", JSON.stringify(loginInfo2));
    document.getElementById("uName").value = "";
    document.getElementById("email2").value = "";
    document.getElementById("showData2").innerText = `${uName}, ${email2}`;
}
window.onload = () => {
    let loginInfo2 = JSON.parse(sessionStorage.getItem("loginInfo2"));
    console.log(loginInfo2);
    document.getElementById(
        "showData2"
    ).innerText = `Username: ${loginInfo2.uName}, Email: ${loginInfo2.email2}`;
};

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage.getItem("string"));
sessionStorage.removeItem("string");
console.log(sessionStorage.getItem("string"));


// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function storeData(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log(localStorage.getItem(key));
    console.log(sessionStorage.getItem(key));
}
storeData("This is key", 101);

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearLocalData() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("LocalStorage length:", localStorage.length);
    console.log("SessionStorage length:", sessionStorage.length);
}
clearLocalData();


// Feature Requests:
// 1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// 2. SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// 3. Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// 4. Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.


// Achievement:
// By the end of these activities, you will:
// Understand how to use localStorage and sessionStorage for persistent and session-specific data storage.
// Save, retrieve, and remove data from both localStorage and sessionStorage.
// Implement form data storage using localStorage and sessionStorage.
// Compare and contrast the use cases for localStorage and sessionStorage.