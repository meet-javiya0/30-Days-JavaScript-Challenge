// Day 17: Data Structures
// Tasks/Activities:


// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
console.log(node1);
console.log(node1.next);


// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }
    addNodeAtTheEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    removeNodeFromTheEnd() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        if (previous) {
            previous.next = null;
        } else {
            this.head = null;
        }
    }
    displayNodes() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(", "));
    }
}
const linkedList = new LinkedList();
linkedList.addNodeAtTheEnd(1);
linkedList.addNodeAtTheEnd(2);
linkedList.addNodeAtTheEnd(3);
linkedList.displayNodes();
linkedList.removeNodeFromTheEnd();
linkedList.displayNodes();


// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.stack.length === 0) {
            return "Stack is empty, you can't remove any element";
        }
        return this.stack.pop();
    }
    peek() {
        if (this.stack.length === 0) {
            return "Stack is empty, you can't view any element";
        }
        return this.stack[this.stack.length - 1];
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(input) {
    const stack = new Stack();
    for (let i = 0; i < input.length; i++) {
        stack.push(input[i]);
    }
    let reversedString = "";
    while (stack.stack.length > 0) {
        reversedString += stack.pop();
    }
    return reversedString;
}
const inputString = "hello";
console.log(reverseString(inputString));
const inputString2 = "world";
console.log(reverseString(inputString2));


// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        if (this.queue.length === 0) {
            return "Queue is empty, you can't remove any element";
        }
        return this.queue.shift();
    }
    front() {
        if (this.queue.length === 0) {
            return "Queue is empty, you can't view any element";
        }
        return this.queue[0];
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.front());

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function printerQueue(jobs) {
    const queue = new Queue();
    for (let i = 0; i < jobs.length; i++) {
        queue.enqueue(jobs[i]);
    }
    while (queue.queue.length > 0) {
        console.log(`Processing job: ${queue.dequeue()}`);
    }
}
const printJobs = ["Job 1", "Job 2", "Job 3", "Job 4"];
printerQueue(printJobs);


// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const nodeA = new TreeNode(10);
const nodeB = new TreeNode(20);
const nodeC = new TreeNode(30);
nodeA.left = nodeB;
nodeA.right = nodeC;
console.log(nodeA);
console.log(nodeB);
console.log(nodeC);

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);
binaryTree.inOrderTraversal();


// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.vertices = {};
    }
    addVertex(vertex) {
        if (this.vertices[vertex]) {
            return "Vertex already exists in the graph";
        }
        this.vertices[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            return "Vertices do not exist in the graph";
        }
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }
    bfs(startingVertex) {
        if (!this.vertices[startingVertex]) {
            console.log("Starting vertex does not exist in the graph");
            return;
        }
        const queue = [];
        const visited = new Set();
        queue.push(startingVertex);
        visited.add(startingVertex);
        const traversalPath = [];
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            traversalPath.push(currentVertex);
            const neighbors = this.vertices[currentVertex];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        return traversalPath.join(", ");
    }
    shortestPath(startingVertex, targetVertex) {
        if (!this.vertices[startingVertex] || !this.vertices[targetVertex]) {
            console.log(
                "Starting or target vertex does not exist in the graph"
            );
            return;
        }
        const queue = [];
        const visited = new Set();
        const parentMap = {};
        queue.push(startingVertex);
        visited.add(startingVertex);
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            for (const adjacentVertex of this.vertices[currentVertex]) {
                if (!visited.has(adjacentVertex)) {
                    visited.add(adjacentVertex);
                    parentMap[adjacentVertex] = currentVertex;
                    if (adjacentVertex === targetVertex) {
                        return this.constructPath(
                            parentMap,
                            startingVertex,
                            targetVertex
                        );
                    }
                    queue.push(adjacentVertex);
                }
            }
        }
        console.log("No path found between the starting and target vertices");
        return;
    }
    constructPath(parentMap, startingVertex, targetVertex) {
        const shortestPath = [targetVertex];
        let currentVertex = targetVertex;
        while (currentVertex !== startingVertex) {
            currentVertex = parentMap[currentVertex];
            shortestPath.unshift(currentVertex);
        }
        return shortestPath;
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
console.log(graph.bfs("A"));
console.log(graph.bfs("B"));
console.log(graph.bfs("C"));
console.log(graph.bfs("D"));
console.log(graph.bfs("E"));
graph.bfs("F");

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
const network = new Graph();
network.addVertex("A");
network.addVertex("B");
network.addVertex("C");
network.addVertex("D");
network.addVertex("E");
network.addVertex("F");
network.addEdge("A", "B");
network.addEdge("A", "C");
network.addEdge("B", "D");
network.addEdge("C", "E");
network.addEdge("D", "F");
console.log("BFS Traversal:", network.bfs("A"));
console.log("Shortest Path:", network.shortestPath("A", "F"));
console.log("Shortest Path:", network.shortestPath("A", "E"));
network.shortestPath("A", "G");


// Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.

// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.

// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.

// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.

// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).


// Achievement:
// By the end of these activities, you will:
// Implement and use linked lists for dynamic data storage.
// Use stacks for LIFO (Last-In-First-Out) operations and reverse data.
// Use queues for FIFO (First-In-First-Out) operations and simulate real-world scenarios.
// Implement binary trees for hierarchical data storage and traversal.
// Understand and use graphs for network representations and pathfinding (optional).