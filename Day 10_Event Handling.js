// Day 10: Event Handling
// Tasks/Activities:


// Activity 1: Basic Event Handling
// Task 1: Add a click event listner to a button that changes the text content of a paragraph.
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    document.getElementById("para").innerText = "Text changed!";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const img = document.getElementById("image");
const para2 = document.getElementById("para2");
img.addEventListener("dblclick", function () {
    img.style.display = "none";
    para2.style.display = "inline";
});
para2.addEventListener("dblclick", function () {
    img.style.display = "inline";
    para2.style.display = "none";
});


// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "red";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "";
});


// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const text = document.getElementById("text");
text.addEventListener("keydown", function (event) {
    console.log(event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const para3 = document.getElementById("para3");
text.addEventListener("keyup", function (event) {
    para3.innerText = event.target.value;
});


// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value) => {
        console.log(value);
    });
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select = document.getElementById("select");
const para4 = document.getElementById("para4");
select.addEventListener("change", function () {
    para4.innerText = select.value;
});


// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.getElementById("ul");
ul.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent that listens for events from dynamically added child elements.
ul.addEventListener("click", function (event) {
    if (event.target.matches(".dynamicElement")) {
        console.log("Dynamic element");
    }
});
setTimeout(() => {
    const newEle = document.createElement("li");
    newEle.innerText = "Fifth";
    newEle.className = "dynamicElement";
    ul.appendChild(newEle);
}, 3000);


// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.

// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.

// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.

// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.

// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.


// Achievement:
// By the end of these activities, students will:
// Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup. Understand and handle form events.
// Implement event delegation to manage events on dynamically added elements.
// Make web pages interactive by responding to various user actions.