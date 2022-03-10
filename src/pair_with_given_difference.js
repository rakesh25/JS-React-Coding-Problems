/*
Input: [5,20,3,2,50,80], 78
Output: [3,5]
*/

//O(n2)
/*
function pairWithGivenDifference(arr, diff) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(Math.abs(arr[i]-arr[j]) === diff) {
                return [i, j];
            }
        }
    }

    return [];
}
*/

//O(n)
function pairWithGivenDifference(arr, diff) {
    let map = new Map();
    for(let i=0; i<arr.length; i++) {
        if(map.has(arr[i]-diff)) {
            return [i, map.get(arr[i]-diff)];
        }else{
            map.set(arr[i], i);
        }
    }
}


console.log(pairWithGivenDifference([5,20,3,2,50,80], 78));