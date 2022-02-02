//https://bigfrontend.dev/problem/array-intersect

function getIntersection(arr1, arr2) {
    let unique = new Set();
    for(let i=0; i<arr1.length; i++) {
        if(arr2.indexOf(arr1[i])!==-1 && !unique.has(arr1[i])){
            unique.add(arr1[i]);
        }
    }

    return [...unique];
}

console.log(getIntersection([1,100, 200, 8,8,8,3,6,100, 10, 10], [8, 7, 7, 50,50, 1,1,1,1,3,3]));