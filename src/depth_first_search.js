/*
Adjacency list is basically a map
It tells that for ex: node a is connected to node b and node c

Q: Given a node, print all the nodes reachable from node in a depth first manner
*/
const adjacencyList = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

//Recursion approach-- this uses system call stack for recursion
function depthFirstPrintRecursion(node) {
    console.log(node);
    for(let neighbor of adjacencyList[node]) {
        depthFirstPrintRecursion(neighbor);
    }
}

depthFirstPrintRecursion('a');

console.log("---------");

//Iterative approach using stack (first in, last out)
function depthFirstPrintIterative(node) {
    let stack = [];
    stack = [node];

    while(stack.length >0) {
        let current = stack.pop(); //removes the last element in the stack
        console.log(current);
        
        for(let neighbor of adjacencyList[current]){
            stack.push(neighbor);
        }
    }
}

depthFirstPrintIterative('a');



