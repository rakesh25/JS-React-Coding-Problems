/*
Adjacency list is basically a map
It tells that for ex: node a is connected to node b and node c

Q: Given a node, print all the nodes reachable from node in a breadth first manner
*/
const adjacencyList = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

let visited = new Set();

function breadthFirstPrint(node) {
    let queue = [node];    
    while(queue.length > 0){
        let current = queue.shift();
        if(!visited.has(current)) {
            visited.add(current);
        }

        for(let neighbor of adjacencyList[current]) {
            queue.push(neighbor);
        }
    }
}

breadthFirstPrint('a');

console.log(visited.values());