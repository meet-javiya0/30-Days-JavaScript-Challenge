// Day 13: Modules
// Tasks/Activities:


// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
let { addNum } = require("./Day 13_script.js");
console.log(addNum(2, 5));

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
let { obj } = require("./Day 13_script.js");
console.log(obj);


// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these function in another script.
let { subNum, mulNum } = require("./Day 13_script.js");
console.log(addNum(5, 3));
console.log(subNum(5, 3));
console.log(mulNum(5, 3));

// Task 4: Create a module that exports a single function usign default export. Import and use this function in another script.
// Solution: in another file named Task-4.mjs


// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports a multiple constants and functions. Import the entire module as an object in another script and use its properties.
// Solution: in another file named Task-5.mjs


// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g. lodash) using npm. Import and use a function from this module in a script.
let lodash = require("lodash");
console.log(lodash.floor(5.53));

// Task 7: Install a third-party module (e.g. axios) using npm. Import and use this module to make a network request in a script.
let axios = require("axios");
axios
    .get("https://api.github.com/users/meet-javiya0")
    .then((response) => {
        console.log(response.data); // Access the response data
    })
    .catch((error) => {
        console.error(error); // Handle any errors
    });


// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// Solution: in another file named Task-8.js using webpack bundle


// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.

// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.

// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.

// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).


// Achievement:
// By the end of these activities, you will:
// Create and export functions, objects, and constants using modules.
// Import modules using named and default imports.
// Use third-party modules installed via npm.
// Understand the basics of module bundling (optional).