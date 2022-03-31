/*
edges[0] represents that there is an edge from node i to node j (undirected) 
*/
const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

//So first we have to create an adjacency list
function createAdjacencyList(edges) {
    let adjacencyList = new Map();

    /*Naive using for loop
    for(let i=0; i<edges.length; i++) {
        let src = edges[i][0];
        let dest = edges[i][1];
        if(!adjacencyList.has(src)) {
            adjacencyList.set(src, [dest]);
        }else{
            adjacencyList.get(src).push(dest);
        }
    }
    */

    //undirected use case-- edges in both direction
    for(const [src, dest] of edges) {
        if(!adjacencyList.has(src)) {
            adjacencyList.set(src, []);
        }
        if(!adjacencyList.has(dest)) {
            adjacencyList.set(dest, []);
        }
        adjacencyList.get(src).push(dest);
        adjacencyList.get(dest).push(src);   //because undirected graph
    }

    //directed use case-- edges in one direction
    /*
    for(const [src, dest] of edges) {
        if(!adjacencyList.has(src)) {
            adjacencyList.set(src, []);
        }
        adjacencyList.get(src).push(dest); //only one way
    }
    */

    return adjacencyList;
}

let adjacencyList = createAdjacencyList(edges);
console.log(adjacencyList.entries());

function hasPath(src, dest, visited=new Set()) {
    //DFS -- without maintaining a visited set in a undirected graph can lead to max call stack, since code will reach
    //to same node in a circular fashion
    /* 
    //If I do just like below, i will end up in a maximum call stack reached state because i am not maintaining visited
    //since it is a undirected graph, we are shifting back and forth from node a to b.
    for(let neighbor of adjacencyList.get(src)) {
        if(neighbor === dest) {
            return true;
        }
        hasPath(neighbor, dest);
    }
    */

    //DFS normal approach
    /*
    if(src === dest) return true;

    if(!visited.has(src)) {
        visited.add(src);

        for(let neighbor of adjacencyList.get(src)) {
            if(hasPath(neighbor, dest, visited)) {
                return true;
            }
        }
    }
    
    return false;
    */

    //DFS clean approach
    if(src === dest) return true;

    if(visited.has(src)) return false;

    visited.add(src);

    for(let neighbor of adjacencyList.get(src)) {
        if(hasPath(neighbor, dest, visited)) {
            return true;
        }
    }

    return false;

    //BFS approach
    /*
    let queue = [src];

    while(queue.length > 0) {
        let current = queue.shift();

        if(current === dest) {
            return true;
        }

        if(!visited.has(current)) {
            visited.add(current);
        }

        for(let neighbor of adjacencyList.get(current)) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return false;
    */

}

console.log("Does graph has path from Node i to Node l--", hasPath('i', 'l'));
console.log("Does graph has path from Node i to Node n--", hasPath('i', 'n'));