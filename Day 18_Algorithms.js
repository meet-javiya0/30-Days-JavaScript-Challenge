// Day 18: Algorithms
// Tasks/Activities:


// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
let arr = [5, 4, 3, 6, 9, 7, 2, 8, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
arr = [5, 4, 3, 6, 9, 7, 2, 8, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
quickSort(arr, 0, arr.length - 1);
console.log(arr);


// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(arr, 6));
console.log(linearSearch(arr, 11));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, start, end, target) {
    for (let i = 0; i < arr.length; i++) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, 0, arr.length, 6));
console.log(binarySearch(arr, 0, arr.length, 12));


// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countChar(str) {
    let obj = {};
    for (const char of str) {
        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }
    return obj;
}
console.log(countChar("My name is Meet Javiya".toLowerCase()));

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstring(str) {
    let start = 0;
    let end = 0;
    let charSet = new Set();
    let maxLength = 0;
    while (end < str.length) {
        if (!charSet.has(str[end])) {
            charSet.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, end - start);
        } else {
            charSet.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}
console.log(longestSubstring("meetjenishsanajayviren"));


// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k = k % arr.length;
    const firstPart = arr.splice(arr.length - k, k);
    arr.unshift(...firstPart);
    return arr;
}
console.log(rotateArray(arr, 2));

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function sortArray(a, b) {
    let c = [];
    c.push(...a);
    c.push(...b);
    c.sort((a, b) => {
        a - b;
    });
    return c;
}
let a = [1, 3, 5, 7, 9];
let b = [2, 4, 6, 8, 10];
console.log(sortArray(a, b));


// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
console.log(fibonacci(15));

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(values, weights, capacity) {
    let dp = Array.from({ length: values.length + 1 }, () =>
        Array(capacity + 1).fill(0)
    );
    for (let i = 1; i <= values.length; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    values[i - 1] + dp[i - 1][w - weights[i - 1]]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[values.length][capacity];
}
console.log(knapsack([60, 100, 120], [10, 20, 30], 50));


// Feature Request:
// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.

// 2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.

// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.

// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.

// 5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming.


// Achievement:
// By the end of these activities, you will:
// Implement and understand common sorting algorithms.
// Implement and understand common searching algorithms.
// Solve string and number-related problems using algorithms.
// Perform array operations using algorithms.
// Apply dynamic programming to solve complex problems (optional).