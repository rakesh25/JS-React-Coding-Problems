//https://leetcode.com/problems/subarray-sum-equals-k/

/*
Input: nums = [1,1,1], target = 2
Output: [0,1] //index of nums[0] + nums[1] makes a total of target
*/

//O(n3)
/*
function targetSumSubArray(arr, target) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<=arr.length; j++) {
            let sum = 0;
            for(let k=i; k<=j; k++) {
                sum+=arr[k];
            }
            if(sum===target) {
                return [i,j];
            }
        }
    }
    return [];
}
*/

//O(n2)
function targetSumSubArray(arr, target) {
    let sum = [];
    sum[0] = 0;
    for(let i=1; i<=arr.length; i++) {
        sum[i] = sum[i-1] + arr[i-1]; //sum[i] stores sum of all the elements starting 0 till i-1
    }
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<=arr.length; j++) {
            if(sum[j]-sum[i] === target) {
                return [i, j-1];
            }
        }
    }
    return [];
}

console.log(targetSumSubArray([1,1,1], 2));
