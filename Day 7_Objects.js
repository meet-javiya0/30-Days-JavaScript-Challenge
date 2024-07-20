// Day 7: Objects
// Tasks/Activities:


// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "How to win friends and influence people?",
    author: "Dale Karnegie",
    year: 1935,
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);


// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.titleAndAuthor = () => {
    return "Title: " + book.title + ", Author: " + book.author;
};
console.log(book.titleAndAuthor());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = (newYear) => {
    book.year = newYear;
};
book.updateYear(1936);
console.log(book);


// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "GECR Library",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
        },
    ],
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach((book) => {
    console.log(book.title);
});


// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.titleAndYear = function () {
    return `Title: ${this.title}, Year: ${this.year}`;
};
console.log(book.titleAndYear());


// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(key, ": ", book[key]);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));


// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.


// Achievement:
// By the end of these activities, you will:
// Create and manipulate objects with properties and methods.
// Understand and use the this keyword in object methods.
// Work with nested objects and arrays of objects.
// Iterate over an object's properties using loops and built-in methods.