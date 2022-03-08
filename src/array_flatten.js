function array_flat(arr, depth=1) {
    return depth > 0 ? arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? array_flat(cur, depth-1): cur), []) : arr;
}

console.log(array_flat([1,2,[[[3,4,5]]]], 1));
