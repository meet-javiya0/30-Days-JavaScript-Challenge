// Day 23: LeetCode Hard
// Tasks/Activities:


// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.
var findMedianSortedArrays = function (num1, num2) {
    if (num1.length > num2.length) {
        return findMedianSortedArrays(num2, num1);
    }
    let m = num1.length;
    let n = num2.length;
    let low = 0;
    let high = m;
    while (low <= high) {
        let cut1 = low + Math.floor((high - low) / 2);
        let cut2 = Math.floor((m + n + 1) / 2) - cut1;
        let left1 = cut1 == 0 ? -Infinity : num1[cut1 - 1];
        let left2 = cut2 == 0 ? -Infinity : num2[cut2 - 1];
        let right1 = cut1 == m ? Infinity : num1[cut1];
        let right2 = cut2 == n ? Infinity : num2[cut2];
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 == 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    return 0.0;
};
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));


// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var mergeKLists = function (lists) {
    let arr = [];
    if (lists.length == 0) {
        return null;
    }
    for (const list of lists) {
        let current = new ListNode();
        current = list;
        while (current !== null) {
            arr.push(current.val);
            current = current.next;
        }
    }
    arr.sort((a, b) => a - b);
    let ans = new ListNode();
    let cur = ans;
    for (let i = 0; i < arr.length; i++) {
        let newNode = new ListNode();
        newNode.val = arr[i];
        cur.next = newNode;
        cur = cur.next;
    }
    return ans.next;
};
let l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
let l3 = new ListNode(2);
l3.next = new ListNode(6);
console.log(mergeKLists([l1, l2, l3]));


// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.
var trap = function (height) {
    let leftMax = [];
    leftMax[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    let rightMax = [];
    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    let totalWater = 0;
    for (let i = 0; i < height.length; i++) {
        let curWater = Math.min(leftMax[i], rightMax[i]) - height[i];
        totalWater = totalWater + curWater;
    }
    return totalWater;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));


// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an n×n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases.
var solveNQueens = function (n) {
    if (n === 1) {
        return [["Q"]];
    }
    let board = Array(n)
        .fill()
        .map(() => Array(n).fill("."));
    let result = [];
    function nQueen(row) {
        if (row === n) {
            result.push(board.map((row) => row.join("")));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = "Q";
                nQueen(row + 1);
                board[row][col] = ".";
            }
        }
    }
    function isSafe(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") return false;
        }
        // Check upper left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q") return false;
        }
        // Check upper right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === "Q") return false;
        }
        return true;
    }
    nQueen(0);
    return result;
};
console.log(solveNQueens(4));
console.log(solveNQueens(5));


// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.
var ladderLength = function (beginWord, endWord, wordList) {
    // Create a set of words for O(1) lookup
    const wordSet = new Set(wordList);
    // If endWord is not in the wordList, return 0
    if (!wordSet.has(endWord)) return 0;
    // Queue for BFS
    let queue = [[beginWord, 1]];
    // Set to keep track of visited words
    let visited = new Set();
    while (queue.length > 0) {
        let [word, level] = queue.shift();
        // If we've reached the endWord, return the level
        if (word === endWord) return level;
        // Generate all possible next words
        for (let i = 0; i < word.length; i++) {
            for (let j = 97; j <= 122; j++) {
                // ASCII codes for 'a' to 'z'
                let newWord =
                    word.slice(0, i) +
                    String.fromCharCode(j) +
                    word.slice(i + 1);
                // If the new word is in the wordSet and hasn't been visited
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    visited.add(newWord);
                }
            }
        }
    }
    // If we can't reach endWord
    return 0;
};
console.log(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));


// Feature Request:
// 1. Median of Two Sorted Arrays Script: Write a script that includes a function to find the median of two sorted arrays and logs the median.
// 2. Merge k Sorted Lists Script: Create a script that includes a function to merge k sorted linked lists and logs the merged list.
// 3. Trapping Rain Water Script: Write a script that includes a function to calculate the amount of trapped rainwater and logs the result.
// 4. N-Queens Script: Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.
// 5. Word Ladder Script: Write a script that includes a function to find the shortest transformation sequence in a word ladder and logs the sequence length.


// Achievement:
// By the end of these activities, you will:
// Solve complex LeetCode problems.
// Apply advanced problem-solving skills to implement efficient algorithms.
// Understand and handle edge cases in hard algorithmic solutions.
// Gain confidence in solving hard-level coding challenges on LeetCode.