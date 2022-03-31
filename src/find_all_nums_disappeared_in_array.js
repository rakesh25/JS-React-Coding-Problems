//https://leetcode.com/explore/interview/card/adobe/483/array-and-strings/2502/

//Using additional space
function findDisappearedNumbers(nums){
    let arr = Array(nums.length).fill(0).map((el, index) => index+1);

    let output = [];

    for(let i=0; i<arr.length; i++) {
        if(nums.indexOf(arr[i]) === -1) {
            output.push(arr[i]);
        }
    }

    return output;
};

//Using NO additional space (excluding output)
function findDisappearedNumbers(nums){
    let unique = new Set([...nums]);
    let output = [];

    for(let i=1; i<=nums.length; i++) {
        if(!unique.has(i)) {
            output.push(i);
        }
    }

    return output;
};

function findDisappearedNumbers(nums){
    let result = [];
    for(let i=0; i<nums.length; i++) {
        let newIndex = Math.abs(nums[i]) - 1;
        //negative means we have visited that element
        if(nums[newIndex] > 0) {
            nums[newIndex]*=-1;
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] > 0) {
            result.push(i);
        }
    }
    return result;
};

console.table(findDisappearedNumbers([4,3,2,7,8,2,3,1]));