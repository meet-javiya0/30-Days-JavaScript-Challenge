// Day 16: Recursion
// Tasks/Activities:


// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorail of a number. Log the result for a few test cases.
function fact(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
}
console.log(fact(5));
console.log(fact(7));
console.log(fact(6));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibo(n) {
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(5));
console.log(fibo(7));
console.log(fibo(10));


// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sum(arr, index) {
    if (index == 0) {
        return arr[0];
    }
    return arr[index] + sum(arr, index - 1);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(arr, arr.length - 1));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxNum(arr, index) {
    if (index == 0) {
        return arr[0];
    }
    let pMax = maxNum(arr, index - 1);
    return arr[index] < pMax ? pMax : arr[index];
}
let arr2 = [6, 5, 10, 8, 2, 1, 9, 3, 7, 4];
console.log(maxNum(arr2, arr2.length - 1));
let arr3 = [14, 12, 10, 8, 2, 1, 15, 3, 13, 4];
console.log(maxNum(arr3, arr3.length - 1));


// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str == "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("Hello!"));
console.log(reverseString("30 Days JavaScript Challenge"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("Cake".toLowerCase()));
console.log(isPalindrome("Rabar".toLowerCase()));
console.log(isPalindrome("MAXAM".toLowerCase()));


// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, minIndex, maxIndex, target) {
    if (minIndex > maxIndex) {
        return -1;
    }
    let mid = minIndex + Math.floor((maxIndex - minIndex) / 2);
    if (arr[mid] == target) {
        return mid;
    } else if (target < arr[mid]) {
        return binarySearch(arr, minIndex, mid - 1, target);
    } else {
        return binarySearch(arr, mid + 1, maxIndex, target);
    }
}
console.log(binarySearch(arr, 0, arr.length - 1, 10));
let arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(binarySearch(arr4, 0, arr4.length - 1, 30));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countTarget(arr, index, target) {
    if (index == 0) {
        if (arr[index] == target) {
            return 1;
        }
        return 0;
    }
    let count = countTarget(arr, index - 1, target);
    return arr[index] == target ? count + 1 : count;
}
let arr5 = [1, 2, 4, 1, 2, 4, 5, 1, 3, 6, 2, 1, 3, 9, 8, 1, 2, 1, 2];
console.log(countTarget(arr5, arr5.length - 1, 1, 0));
console.log(countTarget(arr5, arr5.length - 1, 2, 0));
console.log(countTarget(arr5, arr5.length - 1, 10, 0));


// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
inOrderTraversal(root);

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
root.left.left.left = new Node(6);
console.log(calculateDepth(root));


// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.

// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.

// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.

// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.

// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).


// Achievement:
// By the end of these activities, you will:
// Understand and implement basic recursion.
// Apply recursion to solve problems with arrays and strings.
// Use recursion for searching and counting elements in arrays.
// Perform traversal and calculate tree depth using recursion (optional).