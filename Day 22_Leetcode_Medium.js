// Day 22: LeetCode Medium
// Tasks/Activities:


// Activity 1: Add Two Numbers
// Task 1: Solve the “Add Two Numbers” problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
    let ll = new ListNode(0);
    let cur = ll;
    let carry = 0;
    while (l1 != null || l2 != null) {
        let x = l1 != null ? l1.val : 0;
        let y = l2 != null ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        cur.next = newNode;
        cur = cur.next;
        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }
    if (carry) {
        cur.next = new ListNode(carry);
    }
    return ll.next;
};
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2));
let l3 = new ListNode(0);
let l4 = new ListNode(0);
console.log(addTwoNumbers(l3, l4));
let l5 = new ListNode(9);
l5.next = new ListNode(9);
l5.next.next = new ListNode(9);
l5.next.next.next = new ListNode(9);
l5.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next = new ListNode(9);
l5.next.next.next.next.next.next = new ListNode(9);
let l6 = new ListNode(9);
l6.next = new ListNode(9);
l6.next.next = new ListNode(9);
l6.next.next.next = new ListNode(9);
// Input:
// l5 = [9, 9, 9, 9, 9, 9, 9];
// l6 = [9, 9, 9, 9];
// Output = [8, 9, 9, 9, 0, 0, 0, 1];
console.log(addTwoNumbers(l5, l6));
// Input:
// l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// l2 = [5,6,4]
// Output = [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]


// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the “Longest Substring Without Repeating Characters” problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.
var lengthOfLongestSubstring = function (s) {
    let first = 0;
    let maxL = 0;
    let charSet = new Set();
    for (let last = 0; last < s.length; last++) {
        while (charSet.has(s[last])) {
            charSet.delete(s[first]);
            first++;
        }
        charSet.add(s[last]);
        maxL = Math.max(maxL, last - first + 1);
    }
    return maxL;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));


// Activity 3: Container With Most Water
// Task 3: Solve the “Container With Most Water” problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.
var maxArea = function (height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let water = width * minHeight;
        maxWater = Math.max(water, maxWater);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));


// Activity 4: 3Sum
// Task 4: Solve the "3Sum” problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.
var threeSum = function (nums) {
    let sol = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                sol.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] == nums[j + 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k - 1]) {
                    k--;
                }
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            }
        }
    }
    return sol;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));


// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams” problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.
var groupAnagrams = function (strs) {
    let map = new Map();
    let sol = [];
    for (let str of strs) {
        const sortedString = str.split("").sort().join("");
        if (map.has(sortedString)) {
            sol[map.get(sortedString)].push(str);
        } else {
            map.set(sortedString, sol.length);
            sol.push([str]);
        }
    }
    return sol;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));


// Feature Request:
// 1. Add Two Numbers Script: Write a script that includes a function to solve the "Add Two Numbers” problem and logs the sum as a linked list.
// 2. Longest Substring Script: Create a script that includes a function to find the longest substring without repeating characters and logs the length.
// 3. Container With Most Water Script: Write a script that includes a function to find the container with the most water and logs the maximum amount of water.
// 4. 3Sum Script: Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.
// 5. Group Anagrams Script: Write a script that includes a function to group anagrams and logs the grouped anagrams.


// Achievement:
// By the end of these activities, you will:
// Solve common medium-level LeetCode problems.
// Apply advanced problem-solving skills to implement algorithms.
// Understand and handle edge cases in more complex algorithmic solutions.
// Gain confidence in solving medium-level coding challenges on LeetCode.