let found = false;

function maze(arr, start, dest) {
    console.log(arr);
    DFS(arr, start[0], start[1], dest);
    console.log("Found??--", found);
    console.log("Post DFS--",arr);  
}

function DFS(arr, i, j, dest) {
    let nr = arr.length;
    let nc = arr[0].length;

    if(i<0 || j<0 || i>=nr || j>=nc || arr[i][j]===1) return;

    if(i==dest[0] && j===dest[1]) {
        found=true;
    }

    //cover it as visited
    arr[i][j]=1;

    //Traverse up/down/left/right if not found
    if(!found) {
        DFS(arr, i+1, j, dest);
        DFS(arr, i-1, j, dest);
        DFS(arr, i, j+1, dest);
        DFS(arr, i, j-1, dest);
    }
}

maze([
    [1,0,1],[1,0,0],[1,1,0]
], [0,1], [2,2]);

