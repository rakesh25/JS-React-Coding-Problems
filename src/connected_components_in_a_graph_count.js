let adjacencyList = new Map([
    [3, []],
    [4, [6]],
    [6, [4,5,7,8]],
    [8, [6]],
    [7, [6]],
    [5, [6]],
    [1, [2]],
    [2, [1]]
]);

for(let [key, value] of adjacencyList.entries()) {
    console.log({key, value});
}

let nodes = [...adjacencyList.keys()].sort();

function connectedComponentsCount(adjacencyList) {
    let count = 0;
    let start = nodes[0];
    let visited = new Set();
    let startingNodes = [];
    for(let i=start; i<nodes.length; i++) {
        if(!visited.has(i)) {
            startingNodes.push(i);
            count++;
            //markTraversedNodeVisitedDFS(i, visited);
            markTraversedNodeVisitedBFS(i, visited);
        }

    }

    console.log("Starting node of each connected component--", startingNodes);

    return count;
}

//DFS approach
function markTraversedNodeVisitedDFS(start, visited) {
    for(let neighbor of adjacencyList.get(start)) {
        if(!visited.has(neighbor)) {
            visited.add(neighbor);
            markTraversedNodeVisitedDFS(neighbor, visited);
        }
    }
}

//BFS approach
function markTraversedNodeVisitedBFS(start, visited) {
    let queue = [start];

    while(queue.length > 0){
        let current = queue.shift();
        visited.add(current);
        for(let neighbor of adjacencyList.get(current)) {
            if(!visited.has(neighbor)) {
                queue.push(neighbor);
            }
        }
    }
}

console.log("Connected component count--", connectedComponentsCount(adjacencyList));