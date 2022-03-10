//https://leetcode.com/explore/interview/card/linkedin/340/dynamic-programming/2916/

/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/*
//O(n2)
function max_subarr(nums) {
    let maxSubArraySum = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++) {
        let currentSubArraySum = 0;
        for(let j= i; j<nums.length; j++) {
            currentSubArraySum+= nums[j];
            maxSubArraySum = Math.max(maxSubArraySum, currentSubArraySum);
        }
    }

    return maxSubArraySum;
}
*/

//O(n)-- Kadene's algo
function max_subarr(nums) {
    let currentSubArraySum = nums[0];
    let maxSubArraySum = nums[0];

    for(let i=1; i<nums.length; i++) {
        currentSubArraySum = Math.max(nums[i], currentSubArraySum + nums[i]);
        maxSubArraySum = Math.max(maxSubArraySum, currentSubArraySum);
    }

    return maxSubArraySum;
}

console.log(max_subarr([-2,1,-3,4,-1,2,1,-5,4]));