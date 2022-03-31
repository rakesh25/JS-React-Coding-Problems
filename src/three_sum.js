//https://leetcode.com/explore/interview/card/adobe/483/array-and-strings/2495/

/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

function threeSum(nums) {
    let result = [];
    nums.sort((a,b) => a-b); //-4,-1,-1,0,1,2
    for(let i=0; i<nums.length && nums[i]<=0; i++) {    
        //reason for additional nums[i]<=0 condition is because once nums[i] is greater than 0, 
        //then sum can never be 0 as following numbers will be more than or equal to 0
        if(i===0 || nums[i-1] !== nums[i]) {
            twoSum(nums, i, result);
        }
    }

    console.log("Output--", result);
}

function twoSum(nums, index, result) {
    let target = -nums[index];
    let map = new Map();
    for(let i=index+1; i<nums.length; i++) {
        if( map.has(target-nums[i]) ) {
            result.push([nums[index], nums[i], target-nums[i]]);
            while(i+1 < nums.length && nums[i] === nums[i+1]) {
                ++i;
            }
        }
        map.set(nums[i], i);
    }
    return [];
}

threeSum([-1,0,1,2,-1,-4]);