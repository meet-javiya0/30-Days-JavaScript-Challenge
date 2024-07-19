// Day 3: Control Structures
// Tasks/Activities:


// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero and log the result to the console.
let num = 10;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 15;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    } else {
        console.log(num3);
    }
} else {
    if (num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) annd log the day name to the console.
let day = 3;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85;
let grade;
switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
        break;
}
console.log(grade);


// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to determine if a number is even or odd and log the result to the console.
let num4 = 10;
let result = num4 % 2 === 0 ? "Even" : "Odd";
console.log(result);


// Activity 5: Combinig Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}


// Feature Request:
// 1. Number Check Script: Write a script that checks is a number is positive, negative, zero using if-else statements and logs the result.

// 2. Voting Eligibility Script: Write a script that checks if a person is eligible to vote based on their age and log the result.

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and log the day name.

// 4. Grade Assignment Script: Write a script that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade.

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and log the result.


// Achievement:
// Implement and understand basic if-else control flow.
// Use nested if-else statements to handle multiple conditions.
// Utilize switch cases for control flow based on specific values.
// Apply the ternary operator for conditional checking.
// Combine multiple conditions to solve more complex problems.