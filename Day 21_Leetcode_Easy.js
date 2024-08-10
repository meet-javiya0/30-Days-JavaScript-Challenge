// Day 21: LeetCode Easy
// Tasks/Activities:


// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let find = target - nums[i];
        if (map[find] != undefined) {
            return [i, map[find]];
        }
        map[nums[i]] = i;
    }
    return;
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));


// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.
var reverse = function (x) {
    let ans = 0;
    let num = x;
    x = Math.abs(x);
    while (x > 0) {
        let lastDigit = x % 10;
        ans = ans * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
        return 0;
    }
    if (ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31)) {
        return 0;
    }
    if (num < 0) {
        return ans * -1;
    } else {
        return ans;
    }
};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));


// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.
var isPalindrome = function (x) {
    let ans = 0;
    let num = x;
    while (x > 0) {
        let lastDigit = x % 10;
        ans = ans * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    if (ans != num) {
        return false;
    } else {
        return true;
    }
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
    let tempLL = new ListNode(0, null);
    let currentNode = tempLL;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;

    return tempLL.next;
};
let ll1 = new ListNode(1);
ll1.next = new ListNode(2);
ll1.next.next = new ListNode(4);
let ll2 = new ListNode(1);
ll2.next = new ListNode(3);
ll2.next.next = new ListNode(4);
let ll3 = new ListNode(0);
console.log(mergeTwoLists(ll1, ll2));
console.log(mergeTwoLists(null, null));
console.log(mergeTwoLists(null, ll3));


// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
var isValid = function (s) {
    let stack = [];
    const bracketPairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (let c of s) {
        if (c === "(" || c === "{" || c === "[") {
            stack.push(c);
        } else if (c === ")" || c === "}" || c === "]") {
            if (stack.length === 0 || stack.pop() !== bracketPairs[c]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid(""));
console.log(isValid("["));


// Feature Request:
// 1. Two Sum Script: Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
// 2. Reverse Integer Script: Create a script that includes a function to reverse an integer and handles edge cases.
// 3. Palindrome Number Script: Write a script that includes a function to check if an integer is a palindrome and logs the result.
// 4. Merge Two Sorted Lists Script: Create a script that includes a function to merge two sorted linked lists and logs the merged list.
// 5. Valid Parentheses Script: Write a script that includes a function to check if a string of parentheses is valid and logs the result.


// Achievement:
// By the end of these activities, you will:
// Solve common LeetCode problems.
// Apply problem-solving skills to implement algorithms.
// Understand and handle edge cases in algorithmic solutions.
// Gain confidence in solving easy-level coding challenges on LeetCode.