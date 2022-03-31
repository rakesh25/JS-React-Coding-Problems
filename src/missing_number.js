//https://leetcode.com/explore/interview/card/adobe/483/array-and-strings/2501/

/*
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers,
so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/

function missingNumber(nums) {
    let n = nums.length;
    let maxSum = (n*(n+1))/2;
    return maxSum - nums.reduce((acc, cur) => acc+cur);
}

console.log(missingNumber([0,1]));