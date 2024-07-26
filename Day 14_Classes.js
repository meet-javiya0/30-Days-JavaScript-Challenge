// Day 14: Classes
// Tasks/Activities:


// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log hte greeting message.
class Person {
    constructor(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    greeting() {
        console.log(`Hello ${this.fName}, your age is ${this.age}`);
    }
    // Task-2
    setAge(age) {
        this.age = age;
        console.log(`Your age is ${this.age} now`);
    }
    // Task-5
    static greet() {
        console.log("Hey there, how are you?");
    }
    // Task-7
    getFullName() {
        console.log(`${this.fName} ${this.lName}`);
    }
    // Task-8
    setName(fName, lName) {
        this.fName = fName;
        this.lName = lName;
        this.getFullName();
    }
}
let p = new Person("Jenish", "Zalavadiya", 21);
p.greeting();

// Task 2: Add a method to the Person class that updates the age property and log the updated age.
p.setAge(22);


// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the studdent ID.
class Student extends Person {
    constructor(fName, lName, age, studentId) {
        super(fName, lName, age);
        this.studentId = studentId;
        Student.sTotal++;
    }
    getStudentID() {
        console.log(`Your Student ID is ${this.studentId}`);
    }
    // Task-4
    greeting() {
        console.log(
            `Hello ${this.fName} ${this.lName}, your age is ${this.age} and your student id is ${this.studentId}`
        );
    }
    // Task-6
    static sTotal = 0;
}
let s = new Student("Jenish", "Zalavadiya", 21, 210200107080);
s.getStudentID();

// Task 4: Override the greeting method in the Student class to include the Student ID in the message. Log the overridden greeting message.
s.greeting();


// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.greet();

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
let s2 = new Student("Meet", "Javiya", 20, 210200107078);
console.log("Total student", Student.sTotal);


// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
s.getFullName();
s2.getFullName();

// Task 8: Add a setter method to the Person class to update the name property (firstName and lastName). Update the name using the setter and log the updated full name.
p.setName("Sanjay", "Jogal");
console.log(p);


// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance only be updated through these methods.
class Account {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }
    depositMoney(balance) {
        this.#balance += balance;
    }
    withdrawMoney(balance) {
        this.#balance -= balance;
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balanace after each operation.
let ac = new Account(50000);
console.log(ac.getBalance());
ac.depositMoney(500);
console.log(ac.getBalance());
ac.withdrawMoney(100);
console.log(ac.getBalance());


// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.

// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.

// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.

// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.

// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).


// Achievement:
// By the end of these activities, you will:
// Define and use classes with properties and methods.
// Implement inheritance to extend classes.
// Utilize static methods and properties.
// Apply getters and setters for encapsulation.
// Understand and use private fields in classes (optional).