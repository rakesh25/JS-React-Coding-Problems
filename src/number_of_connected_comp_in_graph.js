//https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

/*
You have a graph of n nodes. 
You are given an integer n and an array edges
where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
*/

function createAdjacencyList(n, edges) {
    let adjacencyList = new Map();

    for(let i=0; i<n; i++) {
        adjacencyList.set(i, []);
    }

    for(const [src, dest] of edges) {
        adjacencyList.get(src).push(dest);
        adjacencyList.get(dest).push(src);
    }

    return adjacencyList;
}

function countConnectedComponents(adjacencyList, n) {
    let visited = new Set();
    let count = 0;
    for(let i=0; i<n;i++) {
        if(!visited.has(i)) {
            count++;
            markNodeVisitedStartingIthNodeDFS(i, adjacencyList, visited);
        }
    }

    return count;
}

function markNodeVisitedStartingIthNodeDFS(startNode, adjacencyList, visited) {
    visited.add(startNode);
    for(let neighbor of adjacencyList.get(startNode)) {
        if(!visited.has(neighbor)) {
            markNodeVisitedStartingIthNodeDFS(neighbor, adjacencyList, visited);
        }
    }
}

function markNodeVisitedStartingIthNodeBFS(startNode, adjacencyList, visited) {
    let queue = [startNode];

    while(queue.length >0) {
        let current = queue.shift();
        visited.add(current);
        for(let neighbor of adjacencyList.get(current)) {
            if(!visited.has(neighbor)) {
                queue.push(neighbor);
            }
        }
    }
}

let n = 5;
let edges = [[0,1],[1,2],[3,4]];
console.log("Number of connected components--", countConnectedComponents(createAdjacencyList(n, edges), n));