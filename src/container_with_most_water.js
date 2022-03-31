//https://leetcode.com/explore/interview/card/adobe/483/array-and-strings/2491/

/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.
*/
//O(n2)
function maxArea(height) {
    let maxVolume = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<height.length; i++) {
        for(let j=i+1; j<height.length; j++) {
            maxVolume = Math.max(maxVolume, (j-i)*Math.min(height[i], height[j]));
        }
    }

    return maxVolume;
}

//O(n)
function maxArea(height) {
    let maxVolume = Number.MIN_SAFE_INTEGER;
    let left = 0;
    let right = height.length-1;
    
    while(left<right) {
        maxVolume = Math.max(maxVolume, Math.min(height[left], height[right])*(right-left));
        if(height[left] > height[right]) {
            right--;
        }else{
            left++;
        }
    }
    return maxVolume;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));