// Day 9: DOM Manipulation
// Tasks/Activities:


// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML elements by its ID and change its text content.
document.getElementById("div").innerHTML = "Text changed";

// Task 2: Select an HTML element by its class and change its background color.
document.querySelector("div").style.backgroundColor = "cyan";


// Activity 2: Creating and Manipulating Elements
// Task 3: Create a new div element with some text content and append it to the body.
const nDiv = document.createElement("div");
nDiv.innerText = "This is new element";
document.body.appendChild(nDiv);

// Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.innerText = "Second";
document.getElementById("ul").appendChild(newLi);


// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
document.getElementById("div2").remove();

// Task 6: Remove the last child of a specific HTML element.
document.getElementById("div3").lastElementChild.remove();


// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g. src of an img tag).
document.getElementById("image").setAttribute("src", "Emma Thompson.jpg");

// Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector("div").style.removeProperty("background-Color");
document.querySelector("div").style.setProperty("color", "red");


// Activity 5: Event Handling
// Task 9: Add a click event listner to a button that changes the text content of a paragraph.
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("para").innerText = "Success!";
});

// Task 10: Add a mouseover event listner to an element that chages its border color.
document.getElementById("btn").addEventListener("mouseover", function () {
    document.getElementById("btn").style.borderColor = "red";
});


// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.

// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.

// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.

// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.

// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.


// Achievement:
// By the end of these activities, you will:
// Select and manipulate DOM elements using JavaScript.
// Create and append new elements to the DOM.
// Remove elements from the DOM.
// Modify attributes and classes of HTML elements.
// Add and handle events to make web pages interactive.